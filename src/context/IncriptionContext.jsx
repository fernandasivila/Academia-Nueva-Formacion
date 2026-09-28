import { createContext, useState } from "react";

export const InscriptionContext = createContext({
    inscriptions: []
});

export const InscriptionProvider = ({ children }) => {
    const [inscriptions, setInscriptions] = useState([]);

    const addCourse = (course, count) => {
        if(!isRegistered(course.id)) {
            setInscriptions(prev => [...prev, { ...course, count }]);
        } else {
            console.error('Ya agregaste esta capacitación a tu solicitud.');
        }
    };

    const removeCourse = (courseId) => {
        setInscriptions(inscriptions.filter(prod => prod.id !== courseId));
    };

    const clearInscriptions = () => {
        setInscriptions([]);
    };

    const isRegistered = (courseId) => {
        return inscriptions.some(prod => prod.id === courseId);
    };

    return (
        <InscriptionContext.Provider value={{ inscriptions, addCourse, removeCourse, clearInscriptions }}>
            {children}
        </InscriptionContext.Provider>
    );
};
