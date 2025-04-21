import { createContext, useState, ReactNode, useEffect } from 'react';
import { Doctor, StoreContextType } from '../types/types'; // adjust path

export const StoreContext = createContext<StoreContextType | null>(null);

type Props = {
    children: ReactNode;
};
const doctors: Doctor[] = [
    {
        name: 'emily',
        availability: ['Mon', 'Wed'],
        experience: 5,
        rating: 4.5,
        speciality: 'Dermatology',
        comment: "Dr. Patel has dedicated over 8 years to orthopedic care, focusing on treating musculoskeletal injuries, joint disorders, and sports injuries. Known for his patient-centered approach, he tailors treatment plans to fit individual needs, from preventative care to surgical solutions."
    },

    // Add more dummy doctors
];

const url: string = "http://localhost:4000"
const StoreContextProvider = ({ children }: Props) => {
    const [active, setActive] = useState<string>('doctor');
    const [data] = useState<Doctor[]>(doctors);
    const [token, setToken] = useState<string>("");
    useEffect(() => {
        async function loadData() {
            if (localStorage.getItem("token")) {
                const token1 = localStorage.getItem("token");
                if (typeof token1 === "string") {
                    setToken(token1);
                }


            }

        }
        loadData();

    }, [])
    useEffect(() => {
        if (token) {

            setToken(token)
            localStorage.setItem("token", token);
            console.log(localStorage.getItem("token"))
        }
    }, [token])
    return (
        <StoreContext.Provider value={{ active, setActive, data, url, token, setToken }}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
