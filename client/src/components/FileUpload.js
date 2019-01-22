import React, {Component} from 'react';
import { Form, Button, Header } from "semantic-ui-react";
import InlineError from './mesages/InlineError';

class FileUpload extends Component {
    constructor(props) {
        super(props);

        this.state = {
            files: null,
            isWrongFile: false
        }
    }

    handleFile = e => {
      this.setState({ files: e.target.files, isWrongFile: false });
    };

    handleUpload = () => {
        this.setState({ isWrongFile: this.validate(this.state.files) }, () => {
            if (!this.state.isWrongFile) {
                this.props.handleUpload(this.state.files);
            }
        });
    };

    validate = (files) => {
        const wrong_file_list = Object.keys(files).filter((key) => (!files[key].name.includes('.msg')));
        return wrong_file_list.length !== 0;
    };

    render() {
        const { isWrongFile }  = this.state;
        return (
            <div>
                <Header as='h1'>File Upload</Header>
                <Form onSubmit={this.handleUpload}>
                    <Form.Field error={!!isWrongFile}>
                        <label htmlFor="files">Choose Single or Multiple Email Files</label>
                        <input
                            type="file"
                            name="file"
                            multiple
                            required
                            onChange={this.handleFile}
                            style={{ display: 'block' }}
                        />
                        { isWrongFile && <InlineError text={"Please upload files with .msg extension!!!"}/>}
                    </Form.Field>
                    <Button primary>
                        Upload
                    </Button>
                </Form>
            </div>
        );
    }
}

export default FileUpload;
