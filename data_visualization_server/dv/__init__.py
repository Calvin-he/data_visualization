from flask import Flask, Blueprint, send_from_directory
from os.path import dirname, realpath, join


def create_app(test_config=None):
    app = Flask(__name__)

    # config mongodb
    app.config["MONGO_URI"] = "mongodb://localhost:27017/dv"
    from dv.db import mongo
    mongo.init_app(app)

    # apply api to the app
    from . import record
    app.register_blueprint(record.bp, url_prefix='/api/record')

    # add static file as root directory, access http://localhost:5000
    cur_dir = dirname(realpath(__file__))
    dist_dir = join(cur_dir, '../../data_visualization_client', 'dist')
    @app.route('/<path:path>', methods=['GET'])
    def static_proxy(path):
        return send_from_directory(dist_dir, path)

    @app.route('/')
    def root():
        return send_from_directory(dist_dir, 'index.html')

    return app
