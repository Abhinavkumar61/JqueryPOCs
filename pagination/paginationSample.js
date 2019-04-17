
// pagination logic with nextpage and next list
$( document ).ready(function() {

    var data = {
        "contractRenewTbl": [{
            "contractLineEndDate": "2019-06-01",
            "offerCode": "ACI",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "N9K-C9332PQ",
            "daysToExpiry": 47,
            "listOfSerials": ["FDO21152K57"],
            "ibKey": "4421818~ACI~5112940824~N9K-C9332PQ~287156748~319194775~121185154116~200224263~104292242~4421818"
        }, {
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-01",
            "offerCode": "ACI",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "N9K-C9332PQ",
            "daysToExpiry": 47,
            "listOfSerials": ["FDO21152K57"],
            "ibKey": "4421818~ACI~5112940824~N9K-C9332PQ~287156748~319194775~121185154116~200224263~104292242~4421818"
        }, {
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-01",
            "offerCode": "ACI",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "N9K-C9332PQ",
            "daysToExpiry": 47,
            "listOfSerials": ["FDO21152K57"],
            "ibKey": "4421818~ACI~5112940824~N9K-C9332PQ~287156748~319194775~121185154116~200224263~104292242~4421818"
        }, {
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-01",
            "offerCode": "ACI",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "N9K-C9332PQ",
            "daysToExpiry": 47,
            "listOfSerials": ["FDO21152K57"],
            "ibKey": "4421818~ACI~5112940824~N9K-C9332PQ~287156748~319194775~121185154116~200224263~104292242~4421818"
        }, {
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-01",
            "offerCode": "ACI",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "N9K-C9332PQ",
            "daysToExpiry": 47,
            "listOfSerials": ["FDO21152K57"],
            "ibKey": "4421818~ACI~5112940824~N9K-C9332PQ~287156748~319194775~121185154116~200224263~104292242~4421818"
        }, {
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-01",
            "offerCode": "ACI",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "N9K-C9332PQ",
            "daysToExpiry": 47,
            "listOfSerials": ["FDO21152K57"],
            "ibKey": "4421818~ACI~5112940824~N9K-C9332PQ~287156748~319194775~121185154116~200224263~104292242~4421818"
        }, {
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-01",
            "offerCode": "ACI",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "N9K-C9332PQ",
            "daysToExpiry": 47,
            "listOfSerials": ["FDO21152K57"],
            "ibKey": "4421818~ACI~5112940824~N9K-C9332PQ~287156748~319194775~121185154116~200224263~104292242~4421818"
        }, {
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-01",
            "offerCode": "ACI",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "N9K-C9332PQ",
            "daysToExpiry": 47,
            "listOfSerials": ["FDO21152K57"],
            "ibKey": "4421818~ACI~5112940824~N9K-C9332PQ~287156748~319194775~121185154116~200224263~104292242~4421818"
        }, {
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-01",
            "offerCode": "ACI",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "N9K-C9332PQ",
            "daysToExpiry": 47,
            "listOfSerials": ["FDO21152K57"],
            "ibKey": "4421818~ACI~5112940824~N9K-C9332PQ~287156748~319194775~121185154116~200224263~104292242~4421818"
        }, {
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-01",
            "offerCode": "ACI",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "N9K-C9332PQ",
            "daysToExpiry": 47,
            "listOfSerials": ["FDO21152K57"],
            "ibKey": "4421818~ACI~5112940824~N9K-C9332PQ~287156748~319194775~121185154116~200224263~104292242~4421818"
        }, {
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-01",
            "offerCode": "ACI",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "N9K-C9332PQ",
            "daysToExpiry": 47,
            "listOfSerials": ["FDO21152K57"],
            "ibKey": "4421818~ACI~5112940824~N9K-C9332PQ~287156748~319194775~121185154116~200224263~104292242~4421818"
        }, {
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-01",
            "offerCode": "ACI",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "N9K-C9332PQ",
            "daysToExpiry": 47,
            "listOfSerials": ["FDO21152K57"],
            "ibKey": "4421818~ACI~5112940824~N9K-C9332PQ~287156748~319194775~121185154116~200224263~104292242~4421818"
        }, {
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-01",
            "offerCode": "ACI",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "N9K-C9332PQ",
            "daysToExpiry": 47,
            "listOfSerials": ["FDO21152K57"],
            "ibKey": "4421818~ACI~5112940824~N9K-C9332PQ~287156748~319194775~121185154116~200224263~104292242~4421818"
        }, {
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-01",
            "offerCode": "ACI",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "N9K-C9332PQ",
            "daysToExpiry": 47,
            "listOfSerials": ["FDO21152K57"],
            "ibKey": "4421818~ACI~5112940824~N9K-C9332PQ~287156748~319194775~121185154116~200224263~104292242~4421818"
        }, {
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-01",
            "offerCode": "ACI",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "N9K-C9332PQ",
            "daysToExpiry": 47,
            "listOfSerials": ["FDO21152K57"],
            "ibKey": "4421818~ACI~5112940824~N9K-C9332PQ~287156748~319194775~121185154116~200224263~104292242~4421818"
        }, {
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-01",
            "offerCode": "ACI",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "N9K-C9332PQ",
            "daysToExpiry": 47,
            "listOfSerials": ["FDO21152K57"],
            "ibKey": "4421818~ACI~5112940824~N9K-C9332PQ~287156748~319194775~121185154116~200224263~104292242~4421818"
        }, {
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-01",
            "offerCode": "ACI",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "N9K-C9332PQ",
            "daysToExpiry": 47,
            "listOfSerials": ["FDO21152K57"],
            "ibKey": "4421818~ACI~5112940824~N9K-C9332PQ~287156748~319194775~121185154116~200224263~104292242~4421818"
        }, {
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-01",
            "offerCode": "ACI",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "N9K-C9332PQ",
            "daysToExpiry": 47,
            "listOfSerials": ["FDO21152K57"],
            "ibKey": "4421818~ACI~5112940824~N9K-C9332PQ~287156748~319194775~121185154116~200224263~104292242~4421818"
        }, {
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        },{
            "contractLineEndDate": "2019-06-01",
            "offerCode": "ACI",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "N9K-C9332PQ",
            "daysToExpiry": 47,
            "listOfSerials": ["FDO21152K57"],
            "ibKey": "4421818~ACI~5112940824~N9K-C9332PQ~287156748~319194775~121185154116~200224263~104292242~4421818"
        }, {
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-01",
            "offerCode": "ACI",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "N9K-C9332PQ",
            "daysToExpiry": 47,
            "listOfSerials": ["FDO21152K57"],
            "ibKey": "4421818~ACI~5112940824~N9K-C9332PQ~287156748~319194775~121185154116~200224263~104292242~4421818"
        }, {
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-01",
            "offerCode": "ACI",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "N9K-C9332PQ",
            "daysToExpiry": 47,
            "listOfSerials": ["FDO21152K57"],
            "ibKey": "4421818~ACI~5112940824~N9K-C9332PQ~287156748~319194775~121185154116~200224263~104292242~4421818"
        }, {
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-01",
            "offerCode": "ACI",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "N9K-C9332PQ",
            "daysToExpiry": 47,
            "listOfSerials": ["FDO21152K57"],
            "ibKey": "4421818~ACI~5112940824~N9K-C9332PQ~287156748~319194775~121185154116~200224263~104292242~4421818"
        }, {
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-01",
            "offerCode": "ACI",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "N9K-C9332PQ",
            "daysToExpiry": 47,
            "listOfSerials": ["FDO21152K57"],
            "ibKey": "4421818~ACI~5112940824~N9K-C9332PQ~287156748~319194775~121185154116~200224263~104292242~4421818"
        }, {
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-01",
            "offerCode": "ACI",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "N9K-C9332PQ",
            "daysToExpiry": 47,
            "listOfSerials": ["FDO21152K57"],
            "ibKey": "4421818~ACI~5112940824~N9K-C9332PQ~287156748~319194775~121185154116~200224263~104292242~4421818"
        }, {
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-01",
            "offerCode": "ACI",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "N9K-C9332PQ",
            "daysToExpiry": 47,
            "listOfSerials": ["FDO21152K57"],
            "ibKey": "4421818~ACI~5112940824~N9K-C9332PQ~287156748~319194775~121185154116~200224263~104292242~4421818"
        }, {
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-01",
            "offerCode": "ACI",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "N9K-C9332PQ",
            "daysToExpiry": 47,
            "listOfSerials": ["FDO21152K57"],
            "ibKey": "4421818~ACI~5112940824~N9K-C9332PQ~287156748~319194775~121185154116~200224263~104292242~4421818"
        }, {
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-01",
            "offerCode": "ACI",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "N9K-C9332PQ",
            "daysToExpiry": 47,
            "listOfSerials": ["FDO21152K57"],
            "ibKey": "4421818~ACI~5112940824~N9K-C9332PQ~287156748~319194775~121185154116~200224263~104292242~4421818"
        }, {
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        },{
            "contractLineEndDate": "2019-06-01",
            "offerCode": "ACI",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "N9K-C9332PQ",
            "daysToExpiry": 47,
            "listOfSerials": ["FDO21152K57"],
            "ibKey": "4421818~ACI~5112940824~N9K-C9332PQ~287156748~319194775~121185154116~200224263~104292242~4421818"
        }, {
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-01",
            "offerCode": "ACI",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "N9K-C9332PQ",
            "daysToExpiry": 47,
            "listOfSerials": ["FDO21152K57"],
            "ibKey": "4421818~ACI~5112940824~N9K-C9332PQ~287156748~319194775~121185154116~200224263~104292242~4421818"
        }, {
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-01",
            "offerCode": "ACI",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "N9K-C9332PQ",
            "daysToExpiry": 47,
            "listOfSerials": ["FDO21152K57"],
            "ibKey": "4421818~ACI~5112940824~N9K-C9332PQ~287156748~319194775~121185154116~200224263~104292242~4421818"
        }, {
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-01",
            "offerCode": "ACI",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "N9K-C9332PQ",
            "daysToExpiry": 47,
            "listOfSerials": ["FDO21152K57"],
            "ibKey": "4421818~ACI~5112940824~N9K-C9332PQ~287156748~319194775~121185154116~200224263~104292242~4421818"
        }, {
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-01",
            "offerCode": "ACI",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "N9K-C9332PQ",
            "daysToExpiry": 47,
            "listOfSerials": ["FDO21152K57"],
            "ibKey": "4421818~ACI~5112940824~N9K-C9332PQ~287156748~319194775~121185154116~200224263~104292242~4421818"
        }, {
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-01",
            "offerCode": "ACI",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "N9K-C9332PQ",
            "daysToExpiry": 47,
            "listOfSerials": ["FDO21152K57"],
            "ibKey": "4421818~ACI~5112940824~N9K-C9332PQ~287156748~319194775~121185154116~200224263~104292242~4421818"
        }, {
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-01",
            "offerCode": "ACI",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "N9K-C9332PQ",
            "daysToExpiry": 47,
            "listOfSerials": ["FDO21152K57"],
            "ibKey": "4421818~ACI~5112940824~N9K-C9332PQ~287156748~319194775~121185154116~200224263~104292242~4421818"
        }, {
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-01",
            "offerCode": "ACI",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "N9K-C9332PQ",
            "daysToExpiry": 47,
            "listOfSerials": ["FDO21152K57"],
            "ibKey": "4421818~ACI~5112940824~N9K-C9332PQ~287156748~319194775~121185154116~200224263~104292242~4421818"
        }, {
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-01",
            "offerCode": "ACI",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "N9K-C9332PQ",
            "daysToExpiry": 47,
            "listOfSerials": ["FDO21152K57"],
            "ibKey": "4421818~ACI~5112940824~N9K-C9332PQ~287156748~319194775~121185154116~200224263~104292242~4421818"
        }, {
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        },{
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }],
        "morePage": false,
        "lastIbKey": "4421818~NGFW-ASA~5096777542~ASA5525-CTRL-LIC~283269541~315310976~121081009783~200224263~103992711~4421818"
    }
    var data2 = {
        "contractRenewTbl":[{
            "contractLineEndDate": "2019-06-17",
            "offerCode": "ISE",
            "bkServiceContractNum": "2521353",
            "bkPrdId": "SNS-3515-K9",
            "daysToExpiry": 63,
            "listOfSerials": ["LIT20100VHE"],
            "ibKey": "4421818~ISE~1798450163~SNS-3515-K9~260365663~260365678~58104195341~2521353~102386229~4421818"
        }, {
            "contractLineEndDate": "2019-07-25",
            "offerCode": "Cisco DNA Center",
            "bkServiceContractNum": "201647388",
            "bkPrdId": "DN1-HW-APL",
            "daysToExpiry": 101,
            "listOfSerials": ["FCH2207V0AN"],
            "ibKey": "4421818~Cisco DNA Center~5202643914~DN1-HW-APL~306584005~321474180~121255008996~201647388~105619315~4421818"
        }, {
            "contractLineEndDate": "2019-09-18",
            "offerCode": "EN - SD - WAN",
            "bkServiceContractNum": "200224263",
            "bkPrdId": "C1111-8PLTEEAWE",
            "daysToExpiry": 156,
            "listOfSerials": ["FGL22329412"],
            "ibKey": "4421818~EN - SD - WAN~5261931710~C1111-8PLTEEAWE~321025043~321025075~121327232785~200224263~106835280~4421818"
        }]
    }
    function createTable(routetopage)
    {
        var contractRows = '';
        contractRows = contractRows + '<tr class="header"><th>Product</th><th>Contract</th><th>Expires</th><th>&nbsp;</th>'
        data.contractRenewTbl.forEach( function(contract, index) {
            var offerClassName = "";
            var daysClassName = "";
            var expireText = "";
            if(contract.daysToExpiry <= 30){
              offerClassName = "expireText";
              daysClassName = "expireDays";
              expireText = "Will Expire in ";
            }else if (contract.daysToExpiry <= 91) {
              offerClassName = "alertText";
              daysClassName = "alertDays";
            }
            contractRows = contractRows + '<tr class="contractRow">';
            contractRows = contractRows + '<td class="'+offerClassName+'">'+contract.offerCode+'<span class="expireDetails">Will Expire in '+contract.daysToExpiry+' Days</span></td>';
            contractRows = contractRows + '<td>'+contract.bkServiceContractNum+'</td>';
            contractRows = contractRows + '<td class="'+daysClassName+'">'+expireText+' '+contract.daysToExpiry+' Days</td>';
            contractRows = contractRows + '<td class="activeRenewBtn"><div style="position:relative"><a href="javascript:void(0)" class="renewBtn">Renew<span class="caretDown"></span></a>';
            contractRows = contractRows + '<ul class="renewMenu">';
            // if(accountRegion !== "APJGC"){
              contractRows = contractRows + '<li><a href="javascript:void(0)" class="renew-chat" data-contract="'+contract.bkServiceContractNum+'" data-renewdate="'+contract.contractLineEndDate+'" data-serialnum="'+contract.listOfSerials[0]+'">Chat</a></li>'
            // }
            contractRows = contractRows + '<li><a href="javascript:void(0)" class="renew-email" data-pzn-form="pzn-renew" data-contract="'+contract.bkServiceContractNum+'" data-renewdate="'+contract.contractLineEndDate+'">E-mail</a></li>';
            // if(accountRegion === "EMEAR"){
              contractRows = contractRows + '<li><a class="renewCall" href="https://callbackext.cloudapps.cisco.com/callback/requestform/guest/140" target="_target">Phone</a></li>';
            // }
            contractRows = contractRows + '</ul></div></td>';
            contractRows = contractRows + '</tr>';
        });
        $('#csc #contractsModule .contract-details table').html(contractRows);
        if (data.contractRenewTbl.length > 5) {
            var count = '';
            for (var i = 0; i < data.contractRenewTbl.length / 5; i++) {
              count = count + '<li><a href="#">';
              count = count + (i + 1) + "</a></li>"
            }
            $('#csc #contractsModule .pagination ul').html(count);
            $('#csc #contractsModule .pagination ul li:first-child a').addClass('active');
    
          }
          else{
            $(".next").hide();
            $(".previous").hide();
          }
    
          var pageSize = 5;
    
          var showPage = function (page) {
            $(".contractRow").hide();
            $(".contractRow").each(function (n) {
              if (n >= pageSize * (page - 1) && n < pageSize * page)
                $(this).show();
            });
          }
    
          $(".morePage").hide();
          $(".pagination li a").click(function () {
              $(".pagination li a").removeClass("active");
              $(this).addClass("active");
              showPage(parseInt($(this).text()))
          });
          $(".previous").click(function() {
            // if (parseInt($('.active').text()) > 1) {
            //   var activePagePrev = parseInt($('.active').text()) - 1;
            //   $(".pagination li a").removeClass("active");
            //   jQuery('a:contains(' + activePagePrev + ')').filter(function () {
            //     return $(this).text() == activePagePrev;
            //   }).addClass('active');
            //   showPage(activePagePrev);
            // };
            if ($('.pagination ul li:visible:first').is(':first-child')) {
                return false;
            }
        
            var currentIndex = $('.pagination ul').children('li:visible:first').index();
            if(currentIndex>=10){
                nextIndex = currentIndex - 6;
                $(' .pagination ul li').hide();
                $(' .pagination ul li:lt(' + currentIndex + '):gt(' + nextIndex + ')').show();
            }
            else{
                nextIndex = 0;
                $(' .pagination ul li').hide();
                $(' .pagination ul li:eq(0)').show();
                $(' .pagination ul li:lt(' + currentIndex + '):gt(' + nextIndex + ')').show();
    
            }
    
            // $(' .pagination ul li').hide();
            // $(' .pagination ul li:lt(10):gt(4)').show();
            // $(' .pagination ul li:lt(' + currentIndex + '):gt(' + nextIndex + ')').show();
          });
          $(".next").click(function() {
        //     if (parseInt($('.active').text()) != (Math.ceil(data.contractRenewTbl.length / 5))) {
        //       var activePageNext = parseInt($('.active').text()) + 1;
        //       $(".pagination li a").removeClass("active");
        //       jQuery('a:contains(' + activePageNext + ')').filter(function () {
        //         return $(this).text() == activePageNext;
        //       }).addClass('active');
        //       showPage(activePageNext);
        //     }if (parseInt($('.active').text()) == (Math.ceil(data.contractRenewTbl.length / 5)) && !data.morePage) {
        //       $('#csc #contractsModule .pagination .morePage').html('<a href="#">More Pages</a>'); ;
        //   }
        if ($('.pagination ul li:visible:last').is(':last-child')) {
            if(!data.morePage){
                $(".morePage").show();
            }
            return false;
        }
    
        var currentIndex = $('ul').children('li:visible:last').index(),
            nextIndex = currentIndex + 6;
        $(' .pagination ul li').hide();
        $(' .pagination ul li:lt(' + nextIndex + '):gt(' + currentIndex + ')').show();
          });
          showPage(routetopage);
    }
    
    createTable(1);
    $('.pagination ul li:gt(4)').hide();
    
    // $('.next').click(function() {
    //     if ($('.pagination ul li:visible:last').is(':last-child')) {
    //         return false;
    //     }
    
    //     var currentIndex = $('ul').children('li:visible:last').index(),
    //         nextIndex = currentIndex + 5;
    //     $(' .pagination ul li').hide();
    //     $(' .pagination ul li:lt(' + nextIndex + '):gt(' + currentIndex + ')').show();
    // });
    $(".morePage").click(function () {
        alert($('.pagination ul').children('li:visible:first').index());
        data.contractRenewTbl = data.contractRenewTbl.concat(data2.contractRenewTbl);
        createTable($('.pagination ul').children('li:visible:first').index());
        $(".morePage").hide();
        $('.pagination ul li:gt(4)').hide();
        
            // renewAPIUrl?crpartyid=userDetail.userCompany&lastIbKey=data.lastIbKey
      });
    });