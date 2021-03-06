import React from 'react';
import Modal from 'react-modal';

// initial Info Modal State types
interface infoModalState {
  modalIsOpen: boolean;
  closeModal: any;
}

// Modal custom styles
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#151524',
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(12, 12, 17, 0.75)',
  },
};

Modal.setAppElement('#root');

// Functional Component, Info Modal
// Modal toggles on when i Icon is clicked
const InfoModal: React.FC<infoModalState> = (props: infoModalState) => {
  return (
    <div>
      <Modal
        id="info-modal"
        isOpen={props.modalIsOpen}
        onRequestClose={props.closeModal}
        style={customStyles}
        contentLabel="Info Modal"
      >
        <div id="info-composition">
          <button className="secondary-button" onClick={props.closeModal}>
            <strong>x</strong>
          </button>
          <img
            src="./../client/assets/images/stratosdb_logo_white.png"
            alt=""
            width="40%"
          />
          <br />
          <br />
          <h1>Setup</h1>
          <p>
            Click on the Cloud Icon (located on the Left Sidebar) and enter your
            AWS RDS Information and press <strong>Connect</strong>
          </p>
          <p>
            <strong>User:</strong> Database Username
            <br />
            <strong>Host:</strong> AWS RDS Endpoint Link *
            <br />
            <strong>Database:</strong> Database name **
            <br />
            <strong>Password:</strong> Database Password
          </p>
          <br />
          <img src="./../client/assets/images/aws-modal.gif" width="60%" />
          <br />
          <p>
            * Sourced from AWS RDS Database Instance Dashboard
            <br />
            ** If Database name was left blank when the AWS RDS Datbase Instance
            was created, use <strong>postgres</strong>
          </p>
          <h1>Overview</h1>
          <h2>Importing .sql and .txt Files</h2>
          <p>
            1. Click on the Import Icon (located on the Left Sidebar)
            <br />
            <br />
            2. Choose the .SQL or .TXT file you would like to import
            <br />
            <br />
            3. Select <strong>Import</strong> to populate your file's code base
            into the application's built-in code editor.
          </p>
          <br />
          <img src="./../client/assets/images/upload-modal.gif" width="60%" />
          <br />
          <h2>Schema Code Editor</h2>
          <p>
            Use the Schema Code Editor to input any psql command queries (EG.{' '}
            <strong>CREATE TABLE</strong>, <strong>INSERT INTO</strong>) to
            create/read tables and/or data entries from your tethered AWS RDS
            database
          </p>
          <br />
          <img
            src="./../client/assets/images/info-modal-code-editor.jpg"
            alt=""
            width="60%"
          />
          <br />
          <h2>Query Text Editor</h2>
          <p>
            Enter your <strong>SELECT</strong> psql commands into the provided
            text editor and press <strong>Submit Query</strong> to initiate the
            performance analysis on your existing schema design
          </p>
          <p>
            EG. SELECT * FROM <em>TABLE_NAME</em>;
          </p>
          <br />
          <img
            src="./../client/assets/images/info-modal-query-text-area.jpg"
            alt=""
            width="60%"
          />
          <br />
          <h2>Return Table</h2>
          <p>
            A scrollable table will render based on the <strong>SELECT</strong>{' '}
            query you have entered in the <strong>Query Text Editor</strong>
          </p>
          <br />
          <img
            src="./../client/assets/images/info-modal-returned-table.jpg"
            alt=""
            width="60%"
          />
          <br />
          <h2>Visual Line Graph</h2>
          <p>
            A visual line graph representation will render the performance time
            (milliseconds) for each successfully performed{' '}
            <strong>SELECT</strong> query ***
          </p>
          <br />
          <img
            src="./../client/assets/images/info-modal-line-graph.jpg"
            alt=""
            width="60%"
          />
          <br />
          <p>
            *** You can hover each point in the line graph to view the query
            that was ran and its corresponding performance time (ms)
          </p>
          <br />
          <h1>Beta</h1>
          <p>
            StratosDB is currently still in Beta and our team will strive to
            continuously release updates and additional features.
          </p>
          <p>1. If you would like to contribute to this open source project:</p>
          <a href="https://github.com/oslabs-beta/StratosDB/pulls">
            Please feel free to submit a PR
          </a>
          <p>
            2. If you happen to come across any issues while tinkering with the
            application:
          </p>
          <a href="https://github.com/oslabs-beta/StratosDB/issues">
            Please report the bug/issue by submitting a ticket on our Github
            Repository
          </a>
          <br />
          <h1>Thank You</h1>
          <img
            src="./../client/assets/images/stratosdb_logo_white.png"
            alt=""
            width="20%"
          />
          <br />
          <span>
            <a href="https://stratosdb.io">Website</a> |{' '}
            <a href="https://github.com/oslabs-beta/StratosDB">Github</a> |{' '}
            <a href="https://twitter.com/TeamStratosDB/">Twitter</a>
          </span>
          <br />
          <br />
        </div>
      </Modal>
    </div>
  );
};

export default InfoModal;
