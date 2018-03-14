import React, { Component } from 'react';

export default class Footer extends Component {
	
  render() {
		return (
			<div className="footer">
				<div className="controls__music-info">
					<div className="controls__music-info--art">
						Album Art
					</div>
					<div className="controls__music-info--desc">
						<p>Song Title</p>
						<p>Artist</p>
					</div>
				</div>
				<div className="controls__player">
					<button className="controls__player--button"><i className="ion-ios-skipbackward-outline"></i></button>
					<button className="controls__player--button"><i className="ion-ios-play-outline"></i></button>
					<button className="controls__player--button"><i className="ion-ios-skipforward-outline"></i></button>
				</div>
				<div className="controls__volume">
					<span><i className="ion-volume-medium"></i></span><input type="range"/>
				</div>
			</div>
		);
  }
}

