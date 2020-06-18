##################################################
# IMPORT DEPENDENCIES                            #
##################################################

import json
import pandas as pd
from main import getSample, final_Data, origin, flight, db, col_1
from flask import Flask, jsonify, render_template

#################################################
# Flask Setup                                   #
#################################################

app = Flask(__name__)

#################################################
# Flask Routes                                  # 
#################################################

@app.route("/")
@app.route("/index")
def welcome():

    results = col_1.distinct('Origin_09')
    lines=[] 
    for result in results:
        lines.append(result)
    results1 = col_1.distinct('Flight_By_Month')
    cats = []
    for result1 in results1:
        cats.append(result1)
    return render_template("index.html", lines= lines, cats = cats)


@app.route("/api/v1.0")
def show_apis():
    """List all available api routes."""
    return (
        f"<h3>Available Routes:</h3>"
        f'<a href="/api/v1.0/Sample_Airlines_Data">/api/v1.0/Sample_Airlines_Data</a><br/>'
        f'<a href="/api/v1.0/Final_Airlines_Data">/api/v1.0/Final_Airlines_Data</a><br/>'       
        f'<a href="/api/v1.0/Origin">/api/v1.0/Origin</a><br/>'
        f'<a href="/api/v1.0/Flight">/api/v1.0/Flight</a><br/>' 
        f'<a href="/"><h4>Back</h4></a><br/>' 
    )

@app.route("/api/v1.0/Sample_Airlines_Data")
def get_Sample_Final_Data():
    return jsonify(getSample())

@app.route("/api/v1.0/Final_Airlines_Data")
def get_Final_Data(): 
    final_data = final_Data()
    final_data = pd.DataFrame(final_data)
    return final_data.to_json(orient='records')

@app.route("/api/v1.0/Origin")
def lol():
    return jsonify(json.dumps(origin()))

@app.route("/api/v1.0/Flight")
def flo():
    return jsonify(json.dumps(flight()))

if __name__ == "__main__":
    app.run(debug=True)
