import React from "react";
import "./MainArea.css";
import {
  MdHome,
  MdVideoLibrary,
  MdPlaylistPlay,
  MdHistory,
  MdWatchLater,
  MdRssFeed,
} from "react-icons/md";
import { FaFutbol, FaGripfire, FaMusic, FaNewspaper } from "react-icons/fa";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import { GiGamepad } from "react-icons/gi";
import ReactPlayer from "react-player";

function MainArea() {
  return (
    <div className="MainArea">
      <div className="Sidebar">
        <div classname="Home">
          <div className="Quick_Icon">
            <MdHome color="red" fontSize="3rem" />
            <div>Home</div>
          </div>
          <div className="Quick_Icon">
            <FaGripfire color="grey" fontSize="3rem" />
            <div>Trending</div>
          </div>
          <div className="Quick_Icon">
            <BsFillCollectionPlayFill color="grey" fontSize="3rem" />
            <div>Subscriptions</div>
          </div>
        </div>
        <div className="Library">
          <div className="Quick_Icon">
            <MdHome color="grey" fontSize="3rem" />
            <div>Home</div>
          </div>
          <div className="Quick_Icon">
            <MdVideoLibrary color="grey" fontSize="3rem" />
            <div>Video Library</div>
          </div>
          <div className="Quick_Icon">
            <MdHistory color="grey" fontSize="3rem" />
            <div>History</div>
          </div>
          <div className="Quick_Icon">
            <MdWatchLater color="grey" fontSize="3rem" />
            <div>Watch Later</div>
          </div>
          <div className="Quick_Icon">
            <MdPlaylistPlay color="grey" fontSize="3rem" />
            <div>Playlist</div>
          </div>
        </div>
        <div className="More From Youtube">
          <div className="Quick_Icon">
            <GiGamepad color="grey" fontSize="3rem" />
            <div>Gaming</div>
          </div>
          <div className="Quick_Icon">
            <MdRssFeed color="grey" fontSize="3rem" />
            <div>Live</div>
          </div>
          <div className="Quick_Icon">
            <FaFutbol color="grey" fontSize="3rem" />
            <div>Sports</div>
          </div>
          <div className="Quick_Icon">
            <FaMusic color="grey" fontSize="3rem" />
            <div>Musics</div>
          </div>
          <div className="Quick_Icon">
            <FaNewspaper color="grey" fontSize="3rem" />
            <div>News</div>
          </div>
        </div>
      </div>
      <div className="Main">


      <div className="Videos">
          <div className="Video">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=ayzDIYqkNDo&list=RDayzDIYqkNDo&start_radio=1"
              height="170px"
              width="280px"
              controls
            />
            <br></br>
            <br></br>
            <div className="Logo">
              <img
                src="/images/Vijay.jpeg"
                alt="Vijay"
                style={{ height: "35px", width: "35px", borderRadius: "50%" }}
              />
              <br></br>
              <br></br>
              <div>Hello bgm</div>
            </div>
            <br></br>
            <div className="view">19,565,355 views•13 Feb 2021</div>
          </div>
        </div>


        

        <div className="Videos">
          <div className="Video">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=MkUIQm--UfA&ab_channel=SonyMusicSouth"
              height="170px"
              width="280px"
              controls
            />
            <br></br>
            <br></br>
            <div className="Logo">
              <img
                src="/images/Vijay.jpeg"
                alt="Vijay"
                style={{ height: "35px", width: "35px", borderRadius: "50%" }}
              />
              <br></br>
              <br></br>
              <div>Vaathi Raid</div>
            </div>
            <br></br>
            <div className="view">15,049,135 views•16 Feb 2021</div>
          </div>
        </div>

        

        

        <div className="Videos">
          <div className="Video">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=eYq7WapuDLU"
              height="170px"
              width="280px"
              controls
            />
            <br></br>
            <br></br>
            <div className="Logo">
              <img
                src="/images/Vijay.jpeg"
                alt="Vijay"
                style={{ height: "35px", width: "35px", borderRadius: "50%" }}
              />
              <br></br>
              <br></br>
              <div>Enjoyee enjami</div>
            </div>
            <br></br>
            <div className="view">49,534,413 views•23 Jan 2021</div>
          </div>
        </div>

        <div className="Videos">
          <div className="Video">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=RW--t4tDSj4"
              height="170px"
              width="280px"
              controls
            />
            <br></br>
            <br></br>
            <div className="Logo">
              <img
                src="/images/karnan.jpg"
                alt="Vijay"
                style={{ height: "35px", width: "35px", borderRadius: "50%" }}
              />
              <br></br>
              <br></br>
              <div>Thayya Thayya song</div>
            </div>
            <br></br>
            <div className="view">4,199,132 views•23 Mar 2021</div>
          </div>
        </div>

        <div className="Videos">
          <div className="Video">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=fRD_3vJagxk&ab_channel=SonyMusicSouth"
              height="170px"
              width="280px"
              controls
            />
            <br></br>
            <br></br>
            <div className="Logo">
              <img
                src="/images/Vijay.jpeg"
                alt="Vijay"
                style={{ height: "35px", width: "35px", borderRadius: "50%" }}
              />
              <br></br>
              <br></br>
              <div>Vaathi Coming</div>
            </div>
            <br></br>
            <div className="view">104,395,600 views•27 Jan 2021</div>
          </div>
        </div>



        <div className="Videos">
          <div className="Video">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=EkxOXF9J77w"
              height="170px"
              width="280px"
              controls
            />
            <br></br>
            <br></br>
            <div className="Logo">
              <img
                src="/images/karnan.jpg"
                alt="Vijay"
                style={{ height: "35px", width: "35px", borderRadius: "50%" }}
              />
              <br></br>
              <br></br>
              <div>Saree ke fall sa</div>
            </div>
            <br></br>
            <div className="view">6,952,574 views•2 Mar 2021</div>
          </div>
        </div>


        <div className="Videos">
          <div className="Video">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=jIVjWFOY6r4&ab_channel=SonyMusicSouth"
              height="170px"
              width="280px"
              controls
            />
            <br></br>
            <br></br>
            <div className="Logo">
              <img
                src="/images/Vijay.jpeg"
                alt="Vijay"
                style={{ height: "35px", width: "35px", borderRadius: "50%" }}
              />
              <br></br>
              <br></br>
              <div>Vaathi kabbadi</div>
            </div>
            <br></br>
            <div className="view">14,943,118 views•13 Jan 2021</div>
          </div>
        </div>


        <div className="Videos">
          <div className="Video">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=xqxF-KM-CxI&ab_channel=ThinkMusicIndia"
              height="170px"
              width="280px"
              controls
            />
            <br></br>
            <br></br>
            <div className="Logo">
              <img
                src="/images/karnan.jpg"
                alt="Vijay"
                style={{ height: "35px", width: "35px", borderRadius: "50%" }}
              />
              <br></br>
              <br></br>
              <div>Kandaa Vara Sollunga</div>
            </div>
            <br></br>
            <div className="view">24,434,172 views•18 Feb 2021</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainArea;
