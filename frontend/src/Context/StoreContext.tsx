import { createContext, useState, ReactNode, useEffect } from 'react';
import { Doctor, StoreContextType, UserData, elementType } from '../types/types';
import axios from 'axios';

export const StoreContext = createContext<StoreContextType | null>(null);

type Props = {
    children: ReactNode;
};

const url: string = "http://localhost:4000";

const StoreContextProvider = ({ children }: Props) => {
    const [active, setActive] = useState<string>('doctor');
    const [data, setData] = useState<Doctor[]>([]);
    const [token, setToken] = useState<string>("");
    const [userData, setUserData] = useState<UserData>({ name: "", email: "", date: "", _id: "" });

    useEffect(() => {
        async function loadData() {
            try {
                const localToken = localStorage.getItem("token");
                if (localToken) {
                    setToken(localToken);
                    const response = await axios.post(`${url}/api/patient/data`, { token: localToken });
                    const { name, email, date, _id } = response.data.data;
                    setUserData({ name, email, date, _id });
                }

                const DoctorList = await axios.post(`${url}/api/doctor/list`);
                const DoctorData: elementType[] = DoctorList.data.data;

                const formattedDoctors: Doctor[] = DoctorData.map(doctor => ({
                    name: doctor.name,
                    availability: ["Mon", "Wed"],
                    experience: 5,
                    rating: 4.5,
                    comment: "NOtAdded",
                    speciality: doctor.speciality
                }));

                setData(formattedDoctors);
            } catch (error) {
                console.error("Error loading data:", error);
            }
        }

        loadData();
    }, []);

    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token);
        }
    }, [token]);

    return (
        <StoreContext.Provider value={{ active, setActive, data, url, token, setToken, userData }}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
