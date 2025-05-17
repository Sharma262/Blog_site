'use client'
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import PostCard from './PostCard';

export default function SearchView(props) {
    const { postMetadata } = props;
    const [searchValue, setSearchValue] = useState('');

    const filteredPosts = postMetadata.filter(val =>
        val.title.toUpperCase().includes(searchValue.toUpperCase())
    );

    return (
        <>
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />

            <div className="postsContainer">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post, postIndex) => (
                        <PostCard key={postIndex} post={post} />
                    ))
                ) : (
                    <div className="noResults">
                        <p>No matching recipes found 😢</p>
                    </div>
                )}
            </div>
        </>
    );
}
