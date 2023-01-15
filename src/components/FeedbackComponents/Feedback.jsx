import { Component } from 'react';

const feedbackMap = [
    { id: 'good', title: 'good' },
    { id: 'neutral', title: 'neutral' },
    { id: 'bad', title: 'bed'},
];

export class Feedback extends Component { 
    state = {
        good: 0,
        neutral: 0,
        bad:0,
    };

    handleClick = event => {
    const { name } = event.target;

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
};
render() {
    return (
        <ul className="list-group list-group-numbered w-100 my-5">
            <h1>Please leave feedback</h1>
        {feedbackMap.map(feedbac => (
          <li key={feedbac.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div className="ms-2 w-50">
              <p className="m-0">{feedbac.title}</p>
            </div>

            <button
              name={feedbac.id}
              type="button"
              onClick={this.handleClick}
              className="btn btn-outline-secondary"
              style={{ minWidth: 150 }}
            >
           good
            </button>

            <span className="badge bg-primary rounded-pill">{this.state[feedbac.id]}</span>
          </li>
        ))}
      </ul>
    );
  }
}


