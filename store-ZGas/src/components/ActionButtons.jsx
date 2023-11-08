import React, { useState } from 'react';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const actionButton = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        const filtered = data.filter((item) =>
            Object.values(item).some((value) =>
                value.toString().toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
        onDataFiltered(filtered);
    };

    return (
        <div className='content-actions'>
            <div className='content-actions'>
                <button className='action-buttons'>Novo</button>
                <button className='action-buttons'>Editar</button>
                <button className='action-buttons'>Excluir</button>
            </div>
            <div className='content-actions-input'>
                <Input
                    id="search-input"
                    placeholder="Buscar"
                    endAdornment={ // Alterado para 'endAdornment'
                        <InputAdornment position="end">
                            <SearchIcon onClick={handleSearch} style={{ cursor: 'pointer' }} />
                        </InputAdornment>
                    }
                />
            </div>
        </div>

    );
};

export default actionButton;
