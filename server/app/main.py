
from flask import Flask, request, jsonify

__author__ = "Paul Cui"

app = Flask(__name__)


@app.route("/")
def index():
    return "Welcome to project-email-flask-server!!!"


@app.route("/api/file", methods=['POST'])
def process_file():
    files = request.files.getlist('email[]')
    result_email_array = []

    for tmp_file in files:
        result_email = {}
        for line in tmp_file.readlines():
            if line.startswith('From:'):
                result_email['From'] = line.split(":", 1)[1].lstrip().rstrip()
            elif line.startswith('To:'):
                result_email['To'] = line.split(":", 1)[1].lstrip().rstrip()
            elif line.startswith('Date:'):
                result_email['Date'] = line.split(":", 1)[1].lstrip().rstrip()
            elif line.startswith('Subject:'):
                result_email['Subject'] = line.split(":", 1)[1].lstrip().rstrip()
            elif line.startswith('Message-ID:'):
                result_email['Message-ID'] = line.split(":", 1)[1].lstrip().rstrip()

        result_email_array.append(result_email)
    return jsonify(result_email_array)


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True, port=1234)
