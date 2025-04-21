export type Doctor = {
    name: string;
    availability: string[];
    experience: number;
    rating: number;
    speciality: string;
    comment: string;
};

export type StoreContextType = {
    active: string;
    setActive: React.Dispatch<React.SetStateAction<string>>;
    data: Doctor[];
    url:string;
    setToken: React.Dispatch<React.SetStateAction<string>>
    token:string;
};

export type inputs ={
    name:string;
    email:string
    password:string;
    
}