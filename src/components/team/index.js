import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './team.css';

class Team extends React.Component {
	render() {
		return (
			<div className="team-section">
				<h2 className="primary-color" style={{ marginTop: '30px' }}>
					{this.props.team.name}
				</h2>
				<div uk-grid="true" className={'uk-grid-large uk-child-width-expand@s'}>
					{this.props.team.members.map((member, idx) => (
						<div
							className={
								'uk-width-1-3@s uk-width-1-4@m uk-width-1-5@l uk-margin-medium-top uk-margin-medium-bottom uk-text-center'
							}
							key={idx}
						>
							<img
								src={member.img ? member.img : '/favicon.ico'}
								className={'uk-thumbnail uk-border-circle'}
								alt={member.name}
								style={{ width: '80%', overflow: 'hidden', backgroundSize: 'cover', backgroundPosition: 'center' }}
							/>
							<div className={'uk-margin-top'}>{member.name}</div>
							<div>
								[ <span className={'primary-color'}>{member.role}</span> ]
							</div>
							<div className={'uk-margin-left'}>
								{member.links.github && (
									<a href={member.links.github} target={'_blank'} className={'uk-margin-right team-ext'}>
										<FaGithub />
									</a>
								)}
								{member.links.linkedin && (
									<a href={member.links.linkedin} target={'_blank'} className={'uk-margin-right team-ext'}>
										<FaLinkedin />
									</a>
								)}
								{member.links.twitter && (
									<a href={member.links.twitter} target={'_blank'} className={'uk-margin-right team-ext'}>
										<FaTwitter />
									</a>
								)}
								{member.links.facebook && (
									<a href={member.links.facebook} target={'_blank'} className={'uk-margin-right team-ext'}>
										<FaFacebook />
									</a>
								)}
							</div>
						</div>
					))}
				</div>
				<hr className="separator" />
			</div>
		);
	}
}

export default Team;
