import React from 'react';
import './projects.scss';
import projectsInfo from './projects-info';
import Tiles from './tiles/tiles';
import Details from './details/details';
class Projects extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: null,
		}
	}

	selectTile(id) {
		const selected = this.state.selected;
		this.setState({
			selected: id
		});
		setTimeout(() =>{
			if (id === null && selected) {
				window.location.href = `#${selected}`;
			} else {
				window.location.href = '#title';
			}
		}, 0)
	}

	render() {
		const selectedProject = this.state.selected && projectsInfo[this.state.selected];
		return (
			<div className="projects-wrapper">
	            <div id="title">
	            	<h2>PROJECTS</h2>
	            </div>
            	<div className={`tiles-wrapper ${selectedProject ? 'tile-selected' : ''}`}>
            		{projectsInfo.projectOrder.map((id) => {
            			const project = projectsInfo[id];
            			return <Tiles
            				key={id}
            				id={id}
            				logoImgLink={project.logo}
            				title={project.title}
            				selected={this.state.selected === id}
            				shouldHide={selectedProject && this.state.selected !== id}
            				onClick={this.selectTile.bind(this, id)}
        				/>
            		})}
            		<div className={`detail-wrapper ${selectedProject ? '' : 'hide'}`}>
            			<Details
            				title={selectedProject && selectedProject.title}
            				intro={selectedProject && selectedProject.intro}
            				technology={selectedProject && selectedProject.technology}
            				images={selectedProject && selectedProject.images}
            				theme={selectedProject && selectedProject.theme}
            				close={this.selectTile.bind(this, null)}
        				/>
            		</div>
            	</div>
	            <div className="overlay"></div>
			</div>
		);
	}
}

export default Projects;