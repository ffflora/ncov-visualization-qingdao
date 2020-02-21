import json


def save_data(stype):
    """
    stype: 'cured','diag'

    """
    df = pd.read_json('data/bulletin.json',encoding="utf8")
    test = df.parag[0].split('：')[1].split('。')[0]
    if test:
        test = test.split('、')
    cured = {}
    for i,t in enumerate(test):
        if ('均已治愈出院') in t:
            cured[str(t[:3])]= t.split('例')[0][-1]
            test[i] = t.split('例')[0]

        elif('已治愈出院）') in t:
            cured[str(t[:3])]= t.split('例')[0][-1]
            test[i] = t.split('例')[0]

        elif('已治愈出院') in t:
            cured[str(t[:3])]= t.split('已治愈出院')[1][0]
            test[i] = t.split('例')[0]

    test = ''.join(test)
    #print(cured)
    # list of diagnosed data 
    import re
    temp = re.findall(r'\d+', test) 
    res = list(map(int, temp))

    if stype == 'cured':
        save_cured(cured)

    elif stype == 'diag':
        save_diag(res)

def save_cured(cured):
    with open('data/cured.json', 'w', encoding = 'utf-8') as f:
        json.dump(cured, f)
def save_diag(res):
    district = ['市南区','市北区','李沧区','崂山区','城阳区','黄岛区','即墨市','胶州市','平度市','莱西市']
    #diag = {district[i]: res[i] for i in range(len(district))} 
    diag = [list(z) for z in zip(district,res)]
    #print(diag)
    with open('data/diagnosed.json', 'w', encoding = 'utf-8') as f:
        json.dump(diag, f)

        
        
save_data('diag')
save_data('cured')