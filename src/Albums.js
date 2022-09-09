import React from 'react'
import withSearch from './withSearch'

function Albums({ data }) {
    let renderAlbums = data.map(album => <h4 key={album.id}>{album.title}</h4>)
    return (
        <div>{renderAlbums}</div>
    )
}

const AlbumsWithSearch = withSearch(Albums, 'albums');
export default AlbumsWithSearch