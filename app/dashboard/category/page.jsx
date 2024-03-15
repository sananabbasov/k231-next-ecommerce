'use client'

import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { useEffect } from 'react';
import Link from 'next/link';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'categoryName', headerName: 'Category name', width: 130 },
];



export default function page() {

    const [categories, setCategories] = useState([])


    const getCategories = async () => {
        await fetch("http://localhost:8080/api/v1/Category/getall").then(x => x.json()).then(x => setCategories(x.data))
    }

    useEffect(() => {
        getCategories()
    }, [])


    return (
        <div style={{ height: 400, width: '100%' }}>
            <Link href="/dashboard/category/create" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add category</Link>

            <DataGrid
                rows={categories}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    );
}