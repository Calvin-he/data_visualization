from flask import Blueprint, request, abort, jsonify
from flask_cors import CORS
from bson.json_util import dumps

from random import Random
from datetime import datetime, timezone
from . import db

bp = Blueprint('record', __name__)

CORS(bp)  # enable CORS on the record blue print

# constans below is used to generate random array
ARRAY_LENGTH = 10
MIN_VALUE = 100
MAX_VALUE = 10000
myRandom = Random(1)  # random generator.


@bp.route('/latest', methods=['GET'])
def get_lastest():
    """ get the latest record 
    """
    data = [myRandom.randint(MIN_VALUE, MAX_VALUE)
            for _ in range(ARRAY_LENGTH)]
    # convert datetime to standard IOS 8601 format like 2019-06-01T13:45:12.534327+00:00
    iso8601Date = datetime.now(tz=timezone.utc).isoformat()
    ret = {
        'data_array': data,
        'timestamp': iso8601Date
    }
    db.save_to_table1(ret)
    return jsonify(ret)


@bp.route('/save', methods=['POST'])
def save_record():
    """ save record to table2
    """
    record = request.get_json()
    # validate record
    if record and record.get('data_array') and record.get('timestamp'):
        db.save_to_table2(record)
        return jsonify(record)
    else:
        abort(400, 'Request data error')


@bp.route('/saved', methods=['GET'])
def list_saved():
    """ fetch saved records from table2
    """
    limit = request.args.get('limit', 100)
    ret = db.list_from_table2(limit)
    return jsonify(ret)
