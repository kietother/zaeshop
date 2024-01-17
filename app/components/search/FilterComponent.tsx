"use client"
import ServerResponse from '@/app/models/common/ServerResponse';
import PagingRequest from '@/app/models/paging/PagingRequest';
import axios from 'axios';
import React from 'react';
const getTypes = async () => {
    try {
        const response = await axios.get<ServerResponse<any>>('http://localhost:5148' + '/api/contentType/all');
        console.log(response.data)
        return response.data;
    } catch (error) {
        return null;
    }
};

export function FilterComponent({ pagingParams, setPagingParams, filter, setFilter }: { pagingParams: PagingRequest, setPagingParams: any, filter: any, setFilter: any }) {
    const handleGenreChange = (genreId: string) => {
        const selectedGenres = filter.selectedGenres || [];
        const updatedGenres = selectedGenres.includes(genreId)
            ? selectedGenres.filter((id: any) => id !== genreId)
            : [...selectedGenres, genreId];
    
        setFilter({ ...filter, selectedGenres: updatedGenres });
    };
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let contentTypes: any[] | ServerResponse<any> | null = [];
    getTypes()
      .then(types => {
        contentTypes = types;
      })
      .catch(error => {
        // Handle errors if needed
        console.error('Error fetching types:', error);
      });
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
                            <a href="list-view.html#" className="anime-btn btn-dark dropdown-toggle" id="genre" data-bs-toggle="dropdown"
                                data-bs-auto-close="outside" aria-expanded="false">
                                Genre <span><i className="fa fa-chevron-down"></i></span>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="genre">
                            {contentTypes.map((genre: any) => (
                                    <li key={genre.id}>
                                        <div className="custom-control custom-checkbox">
                                            <input
                                                type="checkbox"
                                                className="custom-control-input"
                                                id={genre.id}
                                                checked={filter.selectedGenres?.includes(genre.id)}
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
                            <a href="list-view.html#" className="anime-btn btn-dark dropdown-toggle" id="season" data-bs-toggle="dropdown"
                                data-bs-auto-close="outside" aria-expanded="false">
                                Season <span><i className="fa fa-chevron-down"></i></span>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="season">
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="season1" />
                                        <label className="custom-control-label" htmlFor="season1">Season 1</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="season2" />
                                        <label className="custom-control-label" htmlFor="season2">Season 2</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="season3" />
                                        <label className="custom-control-label" htmlFor="season3">Season 3</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="season4" />
                                        <label className="custom-control-label" htmlFor="season4">Season 4</label>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="list-view.html#" className="anime-btn btn-dark dropdown-toggle" id="year" data-bs-toggle="dropdown"
                                data-bs-auto-close="outside" aria-expanded="false">
                                Year <span><i className="fa fa-chevron-down"></i></span>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="year">
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="yr1" />
                                        <label className="custom-control-label" htmlFor="yr1">2023</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="yr2" />
                                        <label className="custom-control-label" htmlFor="yr2">2023</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="yr3" />
                                        <label className="custom-control-label" htmlFor="yr3">2021</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="yr4" />
                                        <label className="custom-control-label" htmlFor="yr4">2020</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="yr5" />
                                        <label className="custom-control-label" htmlFor="yr5">2019</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="yr6" />
                                        <label className="custom-control-label" htmlFor="yr6">2018</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="yr7" />
                                        <label className="custom-control-label" htmlFor="yr7">2017</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="yr8" />
                                        <label className="custom-control-label" htmlFor="yr8">2016</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="yr9" />
                                        <label className="custom-control-label" htmlFor="yr9">2015</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="yr10" />
                                        <label className="custom-control-label" htmlFor="yr10">2014</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="yr11" />
                                        <label className="custom-control-label" htmlFor="yr11">2013</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="yr12" />
                                        <label className="custom-control-label" htmlFor="yr12">2012</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="yr13" />
                                        <label className="custom-control-label" htmlFor="yr13">2010</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="yr14" />
                                        <label className="custom-control-label" htmlFor="yr14">2009</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="yr15" />
                                        <label className="custom-control-label" htmlFor="yr15">2008</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="yr16" />
                                        <label className="custom-control-label" htmlFor="yr16">2007</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="yr17" />
                                        <label className="custom-control-label" htmlFor="yr17">2006</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="yr18" />
                                        <label className="custom-control-label" htmlFor="yr18">2005</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="yr19" />
                                        <label className="custom-control-label" htmlFor="yr19">2004</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="yr20" />
                                        <label className="custom-control-label" htmlFor="yr20">2003</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="yr22" />
                                        <label className="custom-control-label" htmlFor="yr22">2002</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="yr23" />
                                        <label className="custom-control-label" htmlFor="yr23">2001</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="yr24" />
                                        <label className="custom-control-label" htmlFor="yr24">2000</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="yr25" />
                                        <label className="custom-control-label" htmlFor="yr25">1999</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="yr26" />
                                        <label className="custom-control-label" htmlFor="yr26">1998</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="yr27" />
                                        <label className="custom-control-label" htmlFor="yr27">1997</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="yr28" />
                                        <label className="custom-control-label" htmlFor="yr28">1996</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="yr29" />
                                        <label className="custom-control-label" htmlFor="yr29">1995</label>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="list-view.html#" className="anime-btn btn-dark dropdown-toggle" id="status" data-bs-toggle="dropdown"
                                data-bs-auto-close="outside" aria-expanded="false">
                                Status <span><i className="fa fa-chevron-down"></i></span>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="status">
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="status2" />
                                        <label className="custom-control-label" htmlFor="status2">Releasing</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="status3" />
                                        <label className="custom-control-label" htmlFor="status3">Completed</label>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="list-view.html#" className="anime-btn btn-dark dropdown-toggle" id="language" data-bs-toggle="dropdown"
                                data-bs-auto-close="outside" aria-expanded="false">
                                Language <span><i className="fa fa-chevron-down"></i></span>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="language">
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="language1" />
                                        <label className="custom-control-label" htmlFor="language1">VietENG</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="language2" />
                                        <label className="custom-control-label" htmlFor="language2">EngENG</label>
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
                            <a href="#" className="anime-btn btn-dark border-change">Filter Now</a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default FilterComponent;