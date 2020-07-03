##################################################
# IMPORT DEPENDENCIES                            #
##################################################

import json
import pymongo
from pymongo import MongoClient
import pandas as pd

##################################################
# SETUP CONNECTION TO MONGODB                    #
##################################################

conn1 = "mongodb+srv://AbdullahAlm:Aaaa1234@cluster0-ws5s7.mongodb.net/HISHAM_ELHASSAN"
client = MongoClient(conn1)
db = client['Airlines']
col_1 = db['Final_data']

##################################################
# RETREIVE DATA FROM MONGODB                     #
##################################################

def init():
    conn = "mongodb+srv://AbdullahAlm:Aaaa1234@cluster0-ws5s7.mongodb.net/HISHAM_ELHASSAN"
    client = MongoClient(conn)
    db = client['Airlines']
    col_1 = db['Final_data']

    return db, col_1


# Getting Data
def getData():
    results = col_1.distinct('Origin_09')
    w=[] 
    for result in results:
        w.append(result)
    return print(w)

# Sample of final data
def getSample():
    result = col_1.find({}, {"_id":0}).limit(150)
    sample = [] 
    for j in result:
        sample.append(j)
    return sample

# Final_Data
def final_Data():
    results = col_1.find({}, {'_id':0})
    final_Dat = []
    for result in results:
        final_Dat.append(result)
    # f_d = {"results":final_Dat}
    return final_Dat

# Airports of Departure
def origin():
    results = col_1.distinct('Origin_09')
    lines=[] 
    for result in results:
        lines.append(result)
    return lines

# Month of Flight
def flight():
    results = col_1.distinct('Flight_By_Month')
    cats = []
    for result in results:
        cats.append(result)
    return cats


if __name__ == '__main__':
    final_Data()
    
    


