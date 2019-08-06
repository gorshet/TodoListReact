import React from "react";

//create your first component
export class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			chores: [
				{ label: "make the bed" },
				{ label: "Eat Lunch" },
				{ label: "Do the dishes" }
			]
		};
	}

	render() {
		const removeItem = index => {
			this.setState(state => {
				const chores = state.chores.filter(
					(item, label) => label !== index
				);

				return {
					chores
				};
			});
			console.log("Index Item :" + index);
		};

		return (
			<div className="todoListMain">
				<div className="header"> Todos </div>
				<div className="listInput">
					<input
						onKeyUp={e =>
							e.keyCode == 13
								? this.setState({
										chores: this.state.chores.concat({
											label: e.target.value
										})
								  })
								: null
						}
					/>
				</div>

				<div>
					<ul className="list-group">
						{this.state.chores.map((item, index) => {
							return (
								<li className="list-group-item" key={index}>
									{item.label}
									<span>
										<button
											onClick={() => removeItem(index)}
											className="btn btn-danger">
											   x
										</button>
									</span>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
}
