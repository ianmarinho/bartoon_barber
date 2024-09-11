import React, { useEffect, useState } from 'react';
import axios from 'axios';


const BarbeirosPage = () => {
    const [barbeiros, setBarbeiros] = useState([]);

    useEffect(() => {
        axios.get('/api/barbeiros').then(response => setBarbeiros(response.data)).catch(error => console.error(error));
    }, []);

    return (
        <section id="barbeiros">
            <h2>Nossos Barbeiros</h2>
            <div className="barbeiros-list">
                {barbeiros.map(barbeiro => (
                    <div key={barbeiro.id} className="barbeiro-card">
                        <h3>{barbeiro.nome}</h3>
                        <p>Especialidade: {barbeiro.especialidade}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BarbeirosPage;
