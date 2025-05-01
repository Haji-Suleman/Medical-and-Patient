export type Doctor = {
    name: string;
    availability: string[];
    experience: number;
    rating: number;
    speciality: string;
    comment: string;
    _id: string;
};
export interface UserData {
    name: string;
    email: string;
    _id: string;
    date: string;
}

export type StoreContextType = {
    active: string;
    setActive: React.Dispatch<React.SetStateAction<string>>;
    data: Doctor[];
    url: string;
    setToken: React.Dispatch<React.SetStateAction<string>>
    token: string;
    userData: UserData;
    page: boolean;
    setPage: React.Dispatch<React.SetStateAction<boolean>>
};
export type inputs = {
    name: string;
    email: string
    password: string;
    role: "patient"

}
export interface doctorInputs {
    name?: string;
    email: string;
    password: string;
    specialization?: string;
}
export interface elementType {
    name: string;
    email: string;
    password: string;
    _id: string;
    speciality: string;

}
export interface inputTime {
    [key: string]: {
        timeFrom: string;
        timeTo: string;
    };
}
