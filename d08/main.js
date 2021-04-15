const airportData = [
    ['NA', 'US','US-UT','North Salt Lake','heliport','A A Helicopters Inc Heliport'],
    ['NA', 'US','US-NH','New Boston','heliport','A and K Heliport'],
    ['NA', 'US','US-LA','Cameron','heliport','A B Dock Services Heliport'],
    ['NA', 'US','US-AZ','Coyote Springs','small_airport','A C Goodwin Memorial Field Gliderport'],
    ['NA', 'US','US-PA','Perkasie','small_airport','A G A Farms Airport'],
    ['NA', 'US','US-CA','Stockton','heliport','A G Spanos Companies Hq Heliport'],
    ['NA', 'US','US-FL','Boca Raton','heliport','A I M Heliport'],
    ['NA', 'US','US-LA','Crowley','small_airport','A J Patrol Airport'],
    ['NA', 'US','US-NJ','Woodstown','heliport','A M Classics Heliport'],
    ['NA', 'US','US-TX','Weatherford','small_airport','A M I G O For Christ Airport'],
    ['NA', 'US','US-MO','Fredericktown','small_airport','A Paul Vance Fredericktown Regional Airport'],
    ['NA', 'US','US-MI','Belleville','heliport','A T I Heliport'],
    ['NA', 'US','US-TX','San Antonio','small_airport','A W Ranch Airport'],
    ['NA', 'US','US-UT','Mexican Hat','small_airport','A Z Minerals Corporation Airport'],
    ['EU', 'DE','DE-NW','Aachen','heliport','Aachen Hospital Heliport'],
    ['NA', 'US','US-TX','Lucas','heliport','AAF Heliport'],
    ['EU', 'DK','DK-81','Aalborg','large_airport','Aalborg Airport'],
    ['EU', 'BE','BE-VOV','Aalst','heliport','Aalst Hospital Helistrip'],
    ['AS', 'IN','IN-MM','Aamby Valley City','small_airport','Aamby Valley Airport'],
    ['EU', 'DK','DK-82','Aarhus','medium_airport','Aarhus Airport'],
    ['EU', 'DK','DK-U-A','Aarhus','seaplane_base','Aarhus Seaplne Terminal'],
    ['NA', 'US','US-VA','South Boston','small_airport','Aaron Penston Field'],
    ['NA', 'GL','GL-U-A','Aasiaat','medium_airport','Aasiaat Airport'],
    ['AF', 'CD','CD-OR','Aba','small_airport','Aba Airport'],
    ['SA', 'BR','BR-BA','Barreiras','small_airport','Aba Airport'],
    ['AF', 'ET','ET-DD','Dire Dawa','medium_airport','Aba Tenna Dejazmach Yilma International Airport'],
    ['NA', 'US','US-AZ','Phoenix','heliport','Abacus Tower Heliport'],
    ['AS', 'IR','IR-10','Abadan','medium_airport','Abadan Airport'],
    ['AS', 'IR','IR-14','Abadeh','small_airport','Abadeh Airport'],
    ['OC', 'KI','KI-G','Abaiang','small_airport','Abaiang Airport'],
    ['AS', 'RU','RU-KK','Abakan','medium_airport','Abakan Airport'],
    ['EU', 'RU','RU-KYA','Aban','small_airport','Aban Airport'],
    ['AS', 'JP','JP-01','Abashiri','heliport','Abashiri Sub Base JASDF Heliport'],
    ['AS', 'KZ','KZ-YUZ','Abay','small_airport','Abay Bazar Airport'],
    ['AF', 'MR','MR-05','Boghe','small_airport','Abbaye Airport'],
    ['EU', 'FR','FR-S','Abbeville','medium_airport','Abbeville'],
    ['NA', 'US','US-SC','Abbeville','small_airport','Abbeville Airport'],
    ['NA', 'US','US-LA','Abbeville','small_airport','Abbeville Chris Crusta Memorial Airport'],
    ['NA', 'US','US-SC','Abbeville','heliport','Abbeville County Memorial Hospital Heliport'],
    ['NA', 'US','US-LA','Abbeville','heliport','Abbeville General Hospital Heliport'],
    ['NA', 'US','US-AL','Abbeville','small_airport','Abbeville Municipal Airport'],
    ['NA', 'US','US-OH','Perrysburg','heliport','Abbey Etna Heliport'],
    ['EU', 'IE','IE-KY','Abbeyfeale','small_airport','Abbeyfeale Airfield'],
    ['EU', 'IE','IE-LD','Abbeyshrule','small_airport','Abbeyshrule Aerodrome'],
    ['NA', 'US','US-ME','East Sumner','small_airport','Abbots Airport'],
    ['NA', 'CA','CA-BC','Abbotsford','medium_airport','Abbotsford Airport'],
    ['NA', 'US','US-NE','Long Pine','small_airport','Abbott Airport'],
    ['NA', 'US','US-VA','Rocky Mount','small_airport','Abbott Airport'],
    ['NA', 'US','US-NH','Jackson','heliport','Abbott Heliport'],
    ['NA', 'US','US-MN','Minneapolis','heliport','Abbott Northwestern Hospital Heliport'],
    ['AS', 'PK','PK-NW','Abbottabad','small_airport','Abbottabad Airport'],
    ['AS', 'YE','YE-SN','Abbse','small_airport','Abbse Airport'],
    ['AS', 'IR','IR-05','Abdanan','small_airport','Abdanan Airport'],
    ['AF', 'TZ','TZ-07','Zanzibar','medium_airport','Abeid Amani Karume International Airport'],
    ['SA', 'AR','AR-X','Monte Buey','heliport','Abel Monteverde Heliport'],
    ['NA', 'US','US-MT','Kalispell','small_airport','Abel Ranch Airport'],
    ['NA', 'CU','CU-05','Santa Clara','medium_airport','Abel Santamaria Airport'],
    ['SA', 'AR','AR-B','Saladillo','small_airport','Abelenda Airport'],
    ['OC', 'KI','KI-G','Abemama Atoll','small_airport','Abemama Atoll Airport'],
    ['AF', 'CI','CI-05','Abengourou','small_airport','Abengourou Airport'],
    ['AF', 'ZA','ZA-EC','Aberdeen','small_airport','Aberdeen Airport'],
    ['AF', 'ZW','ZW-MA','Aberdeen','small_airport','Aberdeen Airport'],
    ['EU', 'GB','GB-SCT','Aberdeen','large_airport','Aberdeen Dyce Airport'],
    ['NA', 'US','US-VA','Smithfield','small_airport','Aberdeen Field'],
    ['NA', 'CA','CA-NS','New Glasgow','heliport','Aberdeen Hospital Heliport'],
    ['NA', 'US','US-ID','Aberdeen','small_airport','Aberdeen Municipal Airport'],
    ['NA', 'US','US-SD','Aberdeen','medium_airport','Aberdeen Regional Airport'],
    ['EU', 'GB','GB-WLS','Abergavenny','small_airport','Abergavenny Airport'],
    ['NA', 'US','US-TN','Pulaski','small_airport','Abernathy Field'],
    ['NA', 'US','US-TX','Abernathy','small_airport','Abernathy Municipal Airport'],
    ['EU', 'GB','GB-WLS','Aberporth','small_airport','Aberporth Airport'],
    ['AS', 'SA','SA-14','Abha','medium_airport','Abha Regional Airport'],
    ['NA', 'US','US-AK','Palmer','small_airport','Abi Airport'],
    ['NA', 'US','US-MS','Greenville','small_airport','Abide Airpark'],
    ['NA', 'US','US-NE','Abie','small_airport','Abie Sky Ranch Airport'],
    ['NA', 'US','US-TX','Abilene','small_airport','Abilene Executive Airpark'],
    ['NA', 'US','US-KS','Abilene','small_airport','Abilene Municipal Airport'],
    ['NA', 'US','US-TX','Abilene','medium_airport','Abilene Regional Airport'],
    ['NA', 'US','US-TX','Abilene','heliport','Abilene Regional Medical Center Heliport'],
    ['NA', 'US','US-PA','Abington','heliport','Abington Memorial Hospital Heliport'],
    ['NA', 'US','US-FL','Blountstown','small_airport','Able Airpark'],
    ['AF', 'CI','CI-13','Aboisso','small_airport','Aboisso Airport'],
    ['SA', 'BO','BO-S','Cordillera','small_airport','Abopo Airport'],
    ['EU', 'GB','GB-SCT','Aboyne','small_airport','Aboyne Airfield'],
    ['NA', 'US','US-IL','Springfield','large_airport','Abraham Lincoln Capital Airport'],
    ['NA', 'US','US-IL','Lincoln','heliport','Abraham Lincoln Memorial Hosp Heliport'],
    ['NA', 'US','US-IL','Lincoln','heliport','Abraham Lincoln Memorial Hospital Heliport'],
    ['NA', 'US','US-CA','Lucerne Valley','small_airport','Abraham Ranch Airport'],
    ['NA', 'US','US-MI','Grand Ledge','small_airport','Abrams Municipal Airport'],
    ['NA', 'MX','MX-BCS','Abreojos','small_airport','Abreojos Airport'],
    ['OC', 'AU','AU-WA','Abrolhos','small_airport','Abrolhos East Wallabi Island Airport'],
    ['NA', 'US','US-LA','Kaplan','heliport','Abrom Kaplan Memorial Hospital Heliport'],
    ['AS', 'SY','SY-HL','Abu ad Duhur','medium_airport','Abu ad Duhur Air Base'],
    ['AS', 'AE','AE-AZ','Abu Dhabi','large_airport','Abu Dhabi International Airport'],
    ['AS', 'AE','AE-AZ','Abu Dhabi','small_airport','Abu Dhabi Northeast Airport'],
    ['AS', 'EG','EG-JS','Abu Rudeis','small_airport','Abu Rudeis Airport'],
    ['AF', 'EG','EG-ASN','Abu Simbel','medium_airport','Abu Simbel Airport'],
    ['AF', 'EG','EG-IS','Abu Suwayr','medium_airport','Abu Suwayr Air Base'],
    ['AF', 'CD','CD-EQ','Abumumbazi','small_airport','Abumumbazi Airport'],
    ['EU', 'RU','RU-BA','Abzakovo','heliport','Abzakovo Helipad'],
    ['NA', 'US','US-FL','Tampa','heliport','Academy Heliport'],
    ['AS', 'KR','KR-11','Seoul','heliport','Academy Sweet Apartments Heliport'],
    ['AS', 'KR','KR-11','Seoul','heliport','Academy Tower Heliport'],
    ['AS', 'KR','KR-11','Seoul','heliport','Academy Tower Heliport'],
    ['NA', 'US','US-LA','Crowley','heliport','Acadia General Hospital Heliport'],
    ['NA', 'US','US-LA','Eunice','heliport','Acadian Medical Center Heliport'],
    ['NA', 'US','US-ME','Bar Harbor','seaplane_base','Acadian Seaplane Base'],
    ['NA', 'US','US-LA','Lafayette','heliport','Acadiana One Office Bldg Heliport'],
    ['NA', 'US','US-LA','New Iberia','medium_airport','Acadiana Regional Airport'],
    ['NA', 'MX','MX-NAY','Acaponeta','small_airport','Acaponeta Airport'],
    ['NA', 'MX','MX-GRO','Acapulco','heliport','Acapulco General Hospital Heliport'],
    ['SA', 'CO','CO-VAU','Acaricuara','small_airport','Acaricuara Airport'],
    ['SA', 'VE','VE-P','Acarigua','heliport','Acarigua  Heliport'],
    ['NA', 'US','US-VA','Melfa','small_airport','Accomack County Airport'],
    ['NA', 'US','US-WI','Necedah','small_airport','Accurate Airport'],
    ['NA', 'US','US-LA','Parks','small_airport','Ace Flying Airport'],
    ['AS', 'KR','KR-11','Seoul','heliport','Ace Techno Tower Heliport'],
    ['AS', 'KR','KR-11','Seoul','heliport','Ace Techno Tower V Heliport'],
    ['AS', 'KR','KR-11','Seoul','heliport','Ace Tower Heliport'],
    ['NA', 'HN','HN-CH','Acensa','small_airport','Acensa Airport'],
    ['NA', 'US','US-AR','Springdale','heliport','ACH Springdale Heliport'],
    ['AS', 'RU','RU-KYA','Achinsk','medium_airport','Achinsk Airport'],
    ['EU', 'DE','DE-NI','Bramsche','small_airport','Achmer Airport'],
    ['NA', 'PA','PA-5','Achutupo','small_airport','Achutupo Airport'],
    ['NA', 'US','US-MS','Ackerman','small_airport','Ackerman Choctaw County Airport'],
    ['NA', 'US','US-IA','Ackley','small_airport','Ackley Municipal Airport'],
    ['NA', 'US','US-WA','Acme','small_airport','Acme Field'],
    ['NA', 'US','US-MI','Centerline','heliport','Acme Heliport'],
    ['NA', 'MX','MX-PUE','Atlixco','small_airport','Acocotla Airport'],
    ['AS', 'PH','PH-ZMB','Candalaria','heliport','Acoje Mine Helipad'],
    ['AS', 'KR','KR-11','Seoul','heliport','Acro Square Apartments Heliport'],
    ['AS', 'KR','KR-11','Seoul','heliport','Acroriver Apartment Complex Heliports'],
    ['AS', 'KR','KR-11','Seoul','heliport','Acrovista Building Heliport'],
    ['AS', 'KR','KR-11','Seoul','heliport','Acrovista C Building Heliport'],
    ['NA', 'US','US-IN','Hardenstown','small_airport','Action Airpark'],
    ['NA', 'US','US-NV','Las Vegas','heliport','Action Heliport'],
    ['NA', 'CA','CA-BC','Mayne Island','heliport','Active Pass Lighthouse Heliport'],
    ['NA', 'US','US-MA','New Bedford','seaplane_base','Acushnet River Seaplane Base'],
    ['NA', 'US','US-OH','Ada','small_airport','Ada Airport'],
    ['NA', 'US','US-OK','Ada','small_airport','Ada Regional Airport'],
    ['AF', 'ET','ET-OR','Adaba','small_airport','Adaba Airport'],
    ['AF', 'SO','SO-GA','Adado','small_airport','Adado Airport'],
    ['NA', 'US','US-KY','Fountain Run','small_airport','Adair Airport'],
    ['NA', 'US','US-MI','Richmond','small_airport','Adair Airstrip'],
    ['NA', 'US','US-IA','Greenfield','heliport','Adair County Memorial Hospital Heliport'],
    ['NA', 'US','US-AK','Adak Island','medium_airport','Adak Airport'],
    ['AS', 'OM','OM-DA','Adam','small_airport','Adam Airport'],
    ['EU', 'LV','LV-U-A','Adamova','small_airport','Adamovas lidlauks'],
    ['EU', 'RU','RU-ORE','Adamovka','small_airport','Adamovka'],
    ['AS', 'IN','IN-PB','Adampur','small_airport','Adampur Airport'],
    ['NA', 'US','US-PA','Coneville','small_airport','Adams Airport'],
    ['NA', 'US','US-GA','Fayetteville','small_airport','Adams Airport'],
    ['NA', 'US','US-IN','Geneva','small_airport','Adams Airport'],
    ['NA', 'US','US-NC','Rowland','small_airport','Adams Airport'],
    ['NA', 'US','US-IN','Decatur','heliport','Adams Co Memorial Hospital Heliport'],
    ['NA', 'US','US-OH','West Union','heliport','Adams County Hospital Heliport'],
    ['NA', 'US','US-FL','Winter Haven','heliport','Adams Executive Heliport'],
    ['NA', 'US','US-MI','Orchard Lake','heliport','Adams Heliport'],
    ['NA', 'US','US-AZ','Prescott Valley','heliport','Adams Place Heliport'],
    ['NA', 'US','US-IL','Royalton','small_airport','Adams Private Airport'],
    ['NA', 'US','US-FL','Fort Pierce','small_airport','Adams Ranch Airport'],
    ['NA', 'US','US-OH','Pleasent Hill','small_airport','Adams Strip'],
    ['AF', 'ZA','ZA-NC','Colesberg','small_airport','Adamsfontein Airport'],
    ['AS', 'TR','TR-01','Adana','large_airport','Adana Airport'],
    ['EU', 'LV','LV-RI','Adazi','small_airport','Adazi Airfield'],
    ['NA', 'CA','CA-BC','Addenbroke Island','heliport','Addenbroke Island Lightstation Helipad'],
    ['NA', 'US','US-KY','Elizabethtown','small_airport','Addington Field'],
    ['NA', 'US','US-TX','Krum','small_airport','Addington Field'],
    ['AF', 'ET','ET-AA','Addis Ababa','large_airport','Addis Ababa Bole International Airport'],
    ['NA', 'US','US-TX','Dallas','small_airport','Addison Airport'],
    ['NA', 'US','US-AL','Addison','small_airport','Addison Municipal Airport'],
    ['OC', 'AU','AU-SA','Adelaide','large_airport','Adelaide International Airport'],
    ['OC', 'AU','AU-SA','Adelaide','small_airport','Adelaide Parafield Airport'],
    ['OC', 'AU','AU-NT','Adelaide River','heliport','Adelaide River Heliport'],
    ['NA', 'US','US-CA','Adelanto','small_airport','Adelanto Airport'],
    ['AF', 'SO','SO-BN','Mogadishu','medium_airport','Aden Adde International Airport'],
    ['NA', 'US','US-VA','Manassas','small_airport','Aden Field'],
    ['AS', 'YE','YE-AD','Aden','medium_airport','Aden International Airport'],
    ['SA', 'BR','BR-SP','Santa Rita Do Passa Quatro','small_airport','Adhemar Ribeiro Airport'],
    ['NA', 'US','US-CA','Adin','small_airport','Adin Airport'],
    ['NA', 'US','US-NY','Plattsburgh','small_airport','Adirondack Airpark Estates Airport'],
    ['NA', 'US','US-NY','Gouverneur','heliport','Adirondack Helicopters Heliport'],
    ['NA', 'US','US-NY','Saranac Lake','heliport','Adirondack Medical Center Heliport'],
    ['NA', 'US','US-NY','Saranac Lake','medium_airport','Adirondack Regional Airport'],
    ['AF', 'UG','UG-301','Adjumani','small_airport','Adjumani Airport'],
    ['NA', 'PR','PR-U-A','Adjuntas','small_airport','Adjuntas Airport'],
    ['NA', 'US','US-MS','Jackson','heliport','Adjutant General Office Heliport'],
    ['NA', 'US','US-TX','San Antonio','heliport','Adkins Heliport'],
    ['NA', 'US','US-IL','Harvard','small_airport','Adkins RLA Restricted Landing Area'],
    ['NA', 'US','US-IL','Hammond','small_airport','Adkisson Airport'],
    ['NA', 'US','US-NM','Truth Or Consequences','small_airport','Adobe Ranch Private Airport'],
    ['SA', 'BR','BR-MT','Sorriso','small_airport','Adolino Bedin Regional Airport'],
    ['NA', 'US','US-MN','Plymouth','heliport','Advance Machine Company Heliport'],
    ['NA', 'US','US-MA','Pittsfield','heliport','Advance Materials Corp Heliport'],
    ['NA', 'US','US-IL','Bolingbrook','heliport','Adventist Bolingbrook Hospital Heliport'],
    ['NA', 'US','US-IL','Hinsdale','heliport','Adventist Hinsdale Hospital Heliport'],
    ['NA', 'US','US-CA','Hanford','heliport','Adventist Medical Center Hanford Heliport'],
    ['NA', 'US','US-FL','Marathon','heliport','Adventure Island Heliport'],
    ['NA', 'US','US-MO','Jonesburg','small_airport','Adventures Aloft Airport'],
    ['NA', 'US','US-IL','Elgin','heliport','Advocate Sherman Hospital Heliport'],
    ['NA', 'US','US-IL','Hazel Crest','heliport','Advocate South Suburban Hospital Heliport'],
    ['NA', 'US','US-LA','Grand Coteau','small_airport','Aeleron Airport'],
    ['NA', 'US','US-PA','Solebury','small_airport','Aerequus Airport'],
    ['NA', 'US','US-GA','Monroe','small_airport','Aerie Airport'],
    ['NA', 'US','US-IL','Campus','small_airport','Aero Acres Airport'],
    ['NA', 'US','US-FL','Fort Pierce','small_airport','Aero Acres Airport'],
    ['NA', 'MX','MX-SIN','Navolato','small_airport','Aero Agricola El Caimanero Airport'],
    ['NA', 'US','US-KS','Leoti','small_airport','Aero B Ranch Airport'],
    ['NA', 'US','US-CO','Calhan','small_airport','Aero Bear Field'],
    ['NA', 'US','US-MO','Fayette','small_airport','Aero Britton Airport'],
    ['EU', 'NL','NL-OV','Lemelerveld','small_airport','Aero Club Salland'],
    ['NA', 'US','US-TX','Mc Kinney','small_airport','Aero Country Airport'],
    ['NA', 'US','US-TX','Princeton','heliport','Aero Crafter Inc Heliport'],
    ['AF', 'ZA','ZA-NW','Brits','small_airport','Aero Den Airport'],
    ['NA', 'US','US-IL','Belleville','small_airport','Aero Estates Airport'],
    ['NA', 'US','US-TX','Celina','small_airport','Aero Estates Airport'],
    ['NA', 'US','US-TX','Frankston','small_airport','Aero Estates Airport'],
    ['NA', 'US','US-WI','Raymond Township','small_airport','Aero Estates Airport'],
    ['NA', 'US','US-TX','Frankston','seaplane_base','Aero Estates Seaplane Base'],
    ['AF', 'ZA','ZA-FS','Harrismith','small_airport','Aero Farm Airport'],
    ['NA', 'US','US-OH','East Palestine','small_airport','Aero Flight Center Airport'],
    ['NA', 'US','US-IL','Channahon','small_airport','Aero Four Airport'],
    ['NA', 'MX','MX-TAM','Gonzalez','small_airport','Aero Fumigaciones David Airport'],
    ['NA', 'US','US-MT','Missoula','heliport','Aero Heliport'],
    ['NA', 'US','US-TX','Pflugerville','heliport','Aero Heliport'],
    ['NA', 'US','US-IL','Genoa','small_airport','Aero Lake Estates Airport'],
    ['NA', 'US','US-OH','Westfield Center','small_airport','Aero Lake Farm Airport'],
    ['NA', 'US','US-IN','Youngstown','small_airport','Aero Plaines Airport'],
    ['NA', 'US','US-NC','Weddington','small_airport','Aero Plantation Airport'],
    ['SA', 'BR','BR-GO','Bom Jesus','small_airport','Aero Resende Airport'],
    ['SA', 'BR','BR-MT','Alta Floresta','small_airport','Aero Rural Airport'],
    ['NA', 'US','US-NM','Clovis','small_airport','Aero Tech Inc Airport'],
    ['SA', 'BR','BR-AP','Ferreira Gomes','small_airport','Aero Z Ferrus Airport'],
    ['NA', 'US','US-OR','Oregon City','small_airport','Aeroacres Airport'],
    ['SA', 'AR','AR-B','Roberts','small_airport','Aeroagereo'],
    ['NA', 'US','US-IN','North Vernon','small_airport','Aerobatic Practice Airport'],
    ['SA', 'AR','AR-X','Morteros','small_airport','Aeroboero Airport'],
    ['SA', 'BR','BR-MT','Campo Novo Do Parecis','small_airport','Aerocampo Airport'],
    ['SA', 'AR','AR-X','Calchin','small_airport','Aerocampo CSA airport'],
    ['EU', 'ES','ES-V','Sot de Ferrer','small_airport','Aeroclub Alto Palancia'],
    ['EU', 'ES','ES-O','Arnao','small_airport','Aeroclub Arnao UL'],
    ['EU', 'ES','ES-A','Benicolet','small_airport','Aeroclub Balica'],
    ['SA', 'UY','UY-CA','Canelones','small_airport','Aeroclub Canelones'],
    ['SA', 'AR','AR-H','Resistencia','small_airport','Aeroclub Chaco Airport'],
    ['EU', 'ES','ES-AR','Barbastro','small_airport','Aeroclub de Barbastro'],
    ['EU', 'ES','ES-V','Albalat de la Ribera','small_airport','Aeroclub Gregal'],
    ['EU', 'ES','ES-MU','San Javier','small_airport','Aeroclub Mar Menor'],
    ['EU', 'NL','NL-NB','Bernheze','small_airport','Aeroclub Nistelrode'],
    ['SA', 'AR','AR-S','San Javier','small_airport','Aeroclub San Javier'],
]

const schoolData = [
    ['Texas', 'Dallas', 'Dallas High School'],
    ['Texas', 'Dallas', 'Dallas Middle School'],
    ['Texas', 'Dallas', 'Dallas Elementary School'],
    ['Texas', 'Richardson', 'Richardson High School'],
    ['Texas', 'Richardson', 'Richardson Middle School'],
    ['Texas', 'Richardson', 'Richardson Elementary School'],
    ['Texas', 'Plano', 'Plano High School'],
    ['Texas', 'Plano', 'Plano Middle School'],
    ['Texas', 'Plano', 'Plano Elementary School'],
    ['Florida', 'Miami', 'Miami High School'],
    ['Florida', 'Miami', 'Miami Middle School'],
    ['Florida', 'Miami', 'Miami Elementary School'],
    ['Florida', 'Orlando', 'Orlando High School'],
    ['Florida', 'Orlando', 'Orlando Middle School'],
    ['Florida', 'Orlando', 'Orlando Elementary School'],
]

// This array structures the information necessary to build out the dropdown elements.
// Each select element will need (in array order) a value for the select label, a value
// for the id and name of the select element, which will be automatically created vs JS
// and an array of select elements (identified by their ids) that the select will depend on

const selectHeadersAirports = [
    ['Continent', 'continent', []],
    ['Country', 'country', ['continent']],
    ['Region', 'region', ['continent', 'country']],
    ['Municipality', 'municipality', ['continent', 'country', 'region']],
    ['Airport Type', 'airport_type', ['continent', 'country', 'region', 'municipality']],
    ['Airport', 'airport', ['continent', 'country', 'region', 'municipality', 'airport_type']]
];

const selectHeadersSchools = [
    ['State', 'state', []],
    ['City', 'city', ['state']],
    ['School', 'school', ['state', 'city']]
];

class DropDown {
    constructor(data, el, headerColumnIndex, dependsOn) {
        this.data = data;
        this.el = el;
        this.headerColumnIndex = headerColumnIndex;
        this.dependsOn = dependsOn;
    }

    getListAsArray(data, index) {
        const listAsArray = []
        data.forEach(item => {
            listAsArray.push(item[index]);
        })
        return listAsArray;
    }

    getUniqueValues(listAsArray) {
        let uniqueItems = new Set();
        listAsArray.forEach(item => {
            uniqueItems.add(item);
        })
        // To Do: possible turn this set into an array
        return uniqueItems;
    }
    
    getFilteredArray(dependsOnArray) {

        const arrayFilters = dependsOnArray.map(item => {
            return document.getElementById(item).value;
        })

        return this.data.filter(row => {
            return arrayFilters.every( (item, index) => {
                return item === row[index];
            })
        })
    }

    populateDropDown(uniqueValues) {
        const select = document.getElementById(this.el);

        uniqueValues.forEach(item => {
            const option = document.createElement('option');
            option.innerHTML = item;
            select.appendChild(option);
        })
    }

    makeDropDown() {
        
        if (this.dependsOn.length === 0) {

            const listAsArray = this.getListAsArray(this.data, this.headerColumnIndex);
            const uniqueValues = this.getUniqueValues(listAsArray);

            this.populateDropDown(uniqueValues);
            
        } else {
            const filteredArray = this.getFilteredArray(this.dependsOn);
            const listAsArray = this.getListAsArray(filteredArray, this.headerColumnIndex);
            const uniqueValues = this.getUniqueValues(listAsArray);

            this.populateDropDown(uniqueValues);
        }
    }
}

// Function that takes structured data from the selectHeaders array and 
// uses it to build a dropdown for each element.
function createSelectElements(data, selectHeaderArray) {
    selectHeaderArray.forEach(item => {
        const elementIndex = selectHeaderArray.indexOf(item);
        const dropDown = new DropDown(data, item[1], elementIndex, item[2]);
        dropDown.makeDropDown();
    })
}

// function to run the createSelectElements() function for the airport and school selects
function loadAllSelectElements() {
    createSelectElements(airportData, selectHeadersAirports);
    createSelectElements(schoolData, selectHeadersSchools);
}

document.addEventListener('DOMContentLoaded', loadAllSelectElements);
