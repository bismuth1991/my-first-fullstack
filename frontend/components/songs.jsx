import React from 'react';
import SongItem from './song_item';

// class SongIndexHC extends React.Component {
//   render() {
//     const { songs } = this.props;

//     return (
//       <section className="section">
//         <div className="container song-index">
//           <ul className="grid grid-gutter padding-left">
//             {songs.map(song => (
//               <li className="grid-cell u-full u-med-1of2 u-large-1of3 u-xlarge-1of4" key={song.id}>
//                 <SongIndexItemHC
//                   {...song}
//                   {...this.props}
//                 />
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>
//     );
//   }
// }


const Songs = (props) => {
  const { songs } = props;

  return (
    <section className="section">
      <div className="container song-index">
        <ul className="grid grid-gutter padding-left">
          {songs.map(song => (
            <li className="grid-cell u-full u-med-1of2 u-large-1of3 u-xlarge-1of4" key={song.id}>
              <SongItem
                {...song}
                {...props}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Songs;
