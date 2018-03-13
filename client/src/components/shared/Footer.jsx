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
					<button className="controls__player--button"><i className="fas fa-step-backward"></i></button>
					<button className="controls__player--button"><i className="fas fa-play"></i></button>
					<button className="controls__player--button"><i className="fas fa-step-forward"></i></button>
				</div>
				<div className="controls__volume">
					<span><i className="fas fa-volume-down"></i></span><input type="range"/>
				</div>
			</div>
		);
  }
}

