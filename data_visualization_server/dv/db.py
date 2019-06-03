from flask import current_app
from flask_pymongo import PyMongo, DESCENDING

mongo = PyMongo()

def save_to_table1(record):
    rid = mongo.db.table1.insert_one(record).inserted_id
    record['_id'] = str(record['_id']) # convert ObjectId to string
    return rid


def save_to_table2(record):
    rid = mongo.db.table2.insert_one(record).inserted_id
    record['_id'] = str(record['_id']) # convert ObjectId to string
    return rid


def list_from_table2(limit=100):
    ret = []
    for cur in mongo.db.table2.find(sort=[{'timestamp', DESCENDING}], limit=100):
      cur['_id'] = str(cur['_id'])
      ret.append(cur)
    return ret