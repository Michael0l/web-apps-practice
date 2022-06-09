from flask import Flask, request, send_file

import config

app = Flask(__name__, static_url_path='/static')


@app.get('/')
def index():
    return send_file('static/index.html')


def main():
    app.run(host=config.WEBAPP_HOST, port=config.WEBAPP_PORT)


if __name__ == "__main__":
    main()
