import pandas as pd
import numpy as np
import json 
import sync_gg as gg

def Remove(tuples): 
    tuples = [t for t in tuples if t] 
    return tuples


def get_city_pair():
    data = gg.sheetsync('dataset','qd')
    date = data['行程日期']
    city_in = data['到达市']
    city_out = data['出发市']
    
    date = Remove(date)
    city_in = Remove(city_in)
    city_out = Remove(city_out)

    city = city_out + city_in
    unique_city = set(city)

    frequence = [city.count(c) for c in unique_city]
    freq_city = list(zip(unique_city,frequence))
    freq_city

    city_pair =list(zip(city_out,city_in))
    #city_pair = json. dumps(city_pair)
    with open('data/city_pair.json', 'w') as f:
        json.dump(city_pair, f)