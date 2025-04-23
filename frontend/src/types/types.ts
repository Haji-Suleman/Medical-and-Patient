export type Doctor = {
    name: string;
    availability: string[];
    experience: number;
    rating: number;
    speciality: string;
    comment: string;
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
    userData: UserData
};
export type inputs = {
    name: string;
    email: string
    password: string;

}
export interface elementType {
    name: string;
    email: string;
    password: string;
    _id: string;
    speciality: string;

}