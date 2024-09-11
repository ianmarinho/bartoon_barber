import React, { useEffect, useState } from 'react';
import axios from 'axios';


const UnidadesPage = () => {
    const [unidades, setUnidades] = useState([]);

    useEffect(() => {
        axios.get('/api/unidades').then(response => setUnidades(response.data)).catch(error => console.error(error));
    }, []);

    return (
        <section id="unidades">
            <h2>Nossas Unidades</h2>
            <div className="unidades-list">
                {unidades.map(unidade => (
                    <div key={unidade.id} className="unidade-card">
                        <h3>{unidade.nome}</h3>
                        <p>Endereço: {unidade.endereco}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default UnidadesPage;
