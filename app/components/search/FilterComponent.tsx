"use client"
import ServerResponse from '@/app/models/common/ServerResponse';
import PagingRequest from '@/app/models/paging/PagingRequest';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { portalServer } from "@/lib/services/search/baseUrl";

const getTypes = async () => {
    try {
        const response = await axios.get<ServerResponse<any>>(portalServer + '/api/contentType/all');
        return response.data;
    } catch (error) {
        return null;
    }
};

export function FilterComponent({ pagingParams, setPagingParams, filter, setFilter, setIsSubmitFilter, isSubmitFilter }: { pagingParams: PagingRequest, setPagingParams: any, filter: any, setFilter: any, setIsSubmitFilter: any, isSubmitFilter: any }) {
    const years: any[] = Array.from({ length: 30 }, (_, index) => ({ id: `yr${index + 1}`, name: `${2023 - index}` }));
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const [contentTypes, setContentTypes] = useState<any>();

    const handleGenreChange = (genreId: string) => {
        let selectedGenres = []
        if (typeof filter.genre === 'string') {
            var stringArray = filter.genre.split(',');
            selectedGenres = stringArray.map((str: any) => Number(str.trim()));
        } else {
            selectedGenres = filter.genre;
        }

        const updatedGenres = selectedGenres.includes(genreId)
            ? selectedGenres.filter((id: any) => id !== genreId)
            : [...selectedGenres, genreId];
        setFilter({ ...filter, genre: updatedGenres });
    };

    const handleSubmitFilter = () => {
        setIsSubmitFilter(!isSubmitFilter);
    };

    const handleYearChange = (year: string) => {
        let selectedYears = [];

        if (typeof filter.year === 'string') {
            var stringArray = filter.year.split(',');
            selectedYears = stringArray.map((str: any) => str.trim());
        } else {
            selectedYears = filter.year || [];
        }

        const updatedYears = selectedYears.includes(year)
            ? selectedYears.filter((x: any) => x !== year)
            : [...selectedYears, year];
        console.log(updatedYears)
        setFilter({ ...filter, year: updatedYears });
    };

    const handleStatusChange = (status: boolean) => {
        setFilter({ ...filter, status: status });
    };

    useEffect(() => {
        getTypes()
            .then(response => {
                if (response && response.data) {
                    setContentTypes(response.data);
                }
            })
            .catch(error => {
                console.error('Error fetching types:', error);
            });
    }, []);

    return (
        <>
            {/* <!--=====================================-->
        <!--=        filter Area Start          =-->
        <!--=====================================--> */}
            <section className="filter sec-mar">
                <div className="container">
                    <ul className="filter-block">
                        <li>
                            <button
                                className={`anime-btn btn-dark`}
                                type='button'
                                onClick={() => setFilter({ ...filter, firstChar: '' })}
                            >
                                All
                            </button>
                        </li>
                        {alphabet.split('').map((letter, index) => (
                            <li key={index}>
                                <button
                                    className={`anime-btn btn-dark`}
                                    type='button'
                                    onClick={() => setFilter({ ...filter, firstChar: letter })}
                                >
                                    {letter}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <ul className="filter-block style-2">
                        <li>
                            <a href="#" className="anime-btn btn-dark dropdown-toggle" id="genre" data-bs-toggle="dropdown"
                                data-bs-auto-close="outside" aria-expanded="false">
                                Genre <span><i className="fa fa-chevron-down"></i></span>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="genre">
                                {contentTypes?.map((genre: any) => (
                                    <li key={genre.id}>
                                        <div className="custom-control custom-checkbox">
                                            <input
                                                type="checkbox"
                                                className="custom-control-input"
                                                id={genre.id}
                                                checked={filter.genre?.includes(genre.id)}
                                                onChange={() => handleGenreChange(genre.id)}
                                            />
                                            <label className="custom-control-label" htmlFor={genre.id}>
                                                {genre.name}
                                            </label>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li>
                            <a href="#" className="anime-btn btn-dark dropdown-toggle" id="year" data-bs-toggle="dropdown"
                                data-bs-auto-close="outside" aria-expanded="false">
                                Year <span><i className="fa fa-chevron-down"></i></span>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="year">
                                {years.map((year: any) => (
                                    <li key={year.id}>
                                        <div className="custom-control custom-checkbox">
                                            <input
                                                type="checkbox"
                                                className="custom-control-input"
                                                id={year.id}
                                                checked={filter.selectedYears?.includes(year.id)}
                                                onChange={() => handleYearChange(year.name)}
                                            />
                                            <label className="custom-control-label" htmlFor={year.id}>
                                                {year.name}
                                            </label>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li>
                            <a href="list-view.html#" className="anime-btn btn-dark dropdown-toggle" id="status" data-bs-toggle="dropdown"
                                data-bs-auto-close="outside" aria-expanded="false">
                                Status <span><i className="fa fa-chevron-down"></i></span>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="status">
                                <li>
                                    <div className="custom-control custom-radio">
                                        <input
                                            type="radio"
                                            className="custom-control-input"
                                            id="status2"
                                            checked={filter.status === false}
                                            onChange={() => handleStatusChange(false)}
                                        />
                                        <label className="custom-control-label" htmlFor="status2">
                                            Releasing
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-radio">
                                        <input
                                            type="radio"
                                            className="custom-control-input"
                                            id="status3"
                                            checked={filter.status === true}
                                            onChange={() => handleStatusChange(true)}
                                        />
                                        <label className="custom-control-label" htmlFor="status3">
                                            Completed
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="list-view.html#" className="anime-btn btn-dark dropdown-toggle" id="rating" data-bs-toggle="dropdown"
                                data-bs-auto-close="outside" aria-expanded="false">
                                Rating <span><i className="fa fa-chevron-down"></i></span>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="rating">
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="rating1" />
                                        <label className="custom-control-label" htmlFor="rating1">4-5 Stars</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="rating2" />
                                        <label className="custom-control-label" htmlFor="rating2">3-4 Stars</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="rating3" />
                                        <label className="custom-control-label" htmlFor="rating3">2-3 Stars</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="rating4" />
                                        <label className="custom-control-label" htmlFor="rating4">1-2 Stars</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="rating5" />
                                        <label className="custom-control-label" htmlFor="rating5">0-1 Star</label>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="list-view.html#" className="anime-btn btn-dark dropdown-toggle" id="sort-by" data-bs-toggle="dropdown"
                                data-bs-auto-close="outside" aria-expanded="false">
                                Sort by <span><i className="fa fa-chevron-down"></i></span>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="sort-by">
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="sort1" />
                                        <label className="custom-control-label" htmlFor="sort1">Recently updated</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="sort2" />
                                        <label className="custom-control-label" htmlFor="sort2">Release Date</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="sort3" />
                                        <label className="custom-control-label" htmlFor="sort3">Trending</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="sort4" />
                                        <label className="custom-control-label" htmlFor="sort4">Rating</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="sort5" />
                                        <label className="custom-control-label" htmlFor="sort5">Most Watched</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="sort6" />
                                        <label className="custom-control-label" htmlFor="sort6">Most Popular</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="sort7" />
                                        <label className="custom-control-label" htmlFor="sort7">Number of Episodes</label>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="filter-block">
                        <li className="mb-0">
                            <button
                                className={`anime-btn btn-dark border-change`}
                                type='button'
                                onClick={() => handleSubmitFilter()}
                            >
                                Filter Now
                            </button>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default FilterComponent;