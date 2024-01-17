"use client"
import ServerResponse from "@/app/models/common/ServerResponse";
import PagingRequest from "@/app/models/paging/PagingRequest";
import { useEffect, useState } from "react";
import ComicSearchResult from "./ComicSearchResult";
import FilterComponent from "./FilterComponent";
import axios from "axios";
import { portalServer } from "@/lib/services/search/baseUrl";

const getAlbums = async (params: PagingRequest, filter: any) => {
    try {
        const response = await axios.get<ServerResponse<any>>('http://localhost:5148' + '/api/album', {
            params: { ...params, ...filter },
        });

        return response.data.data;
    } catch (error) {
        return null;
    }
};

export default function Search() {
    const [albums, setAlbums] = useState();
    const [pagingParams, setPagingParams] = useState<PagingRequest>({
        PageNumber: 1,
        PageSize: 12,
        SearchTerm: '',
        SortColumn: '',
        SortDirection: 'asc'
    });
    const [filter, setFilter] = useState({
        firstChar: '',
        genre: '',
        country: '',
        year: null,
        status: false,
        language: '',
        rating: '',
    });

    useEffect(() => {
        getAlbums(pagingParams, filter).then((data) => {
            setAlbums(data.data);
        });
    }, [pagingParams, filter.firstChar]);

    return (
        <>
            <FilterComponent pagingParams={pagingParams} setPagingParams={setPagingParams} filter={filter} setFilter={setFilter} />
            <ComicSearchResult albums={albums} />
        </>
    );
}