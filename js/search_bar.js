//Dependencies
var $ = require('jquery');
require('./script.js');

// Methods
function SearchLinkPressed(thisElement){
    var ClassList = $(thisElement).attr('class').split(/\s+/);

    //Loop through each class
    for (var x = 0; x < ClassList.length; x++) {
        //Class containing page is found
        if (ClassList[x].substring(0, 10) === "link-page-") {

            //Set page
            SetPage(ClassList[x].split("link-page-")[1]);
            break;
        }
    }

    //Hide Search Bar

    document.getElementById("search-input").value = "";
    Search();
}

//Global Variables
var SearchOptions = [
    {name: 'Home', tags: ' ! vigilantes Home', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-home"><i class="fa fa-home"></i>&nbsp;Home</a></li>', matches: 0},

    {name: 'Podcasts', tags: ' ! sound Podcasts', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-podcasts"><i class="fa fa-headphones"></i>&nbsp;Podcasts</a></li>',
    matches: 0},

    {name: 'Discover More', tags: ' ! extra info links Discover More', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-discover"><i class="fa fa-info-circle"></i>&nbsp;Discover More</a></li>', matches: 0},

    {name: 'Update Log', tags: ' ! extra info links backlog log updates changes new ', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-updates"><i class="fa fa-cog"></i>&nbsp;Update Log</a></li>', matches: 0},

    {name: 'The Team', tags: ' ! developers writers website authors creators contact devs designers artists The Team', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-team"><i class="fa fa-pencil-square"></i>&nbsp;The Team</a></li>', matches: 0},

    {name: 'Quiz', tags: ' ! quiz questions knowledge ask test', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-quiz"><i class="fa fa-question"></i>&nbsp;Quiz</a></li>', matches: 0},

    {name: 'World History', tags: ' ! story World sydney History', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-history" alt=""><i class="fa fa-university"></i>&nbsp;World History</a></li>', matches: 0},

    {name: 'Sub Universes', tags: ' ! heroes characters universes sub', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-heroes"><i class="fa fa-address-book-o"></i>&nbsp;Sub-Universes</a></li>', matches: 0},

    {name: 'Timeline', tags: ' ! events storyline chronology history Timeline', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-timeline"><i class="fa fa-clock-o"></i>&nbsp;Timeline</a></li>', matches: 0},

    {name: 'Storylines', tags: ' ! Storylines stages sagas series tales ', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-story"><i class="fa fa-book"></i>&nbsp;Storylines</a></li>', matches: 0},


    {name: 'Viper', tags: ' ! sub universe viper', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-viper"><i class="fa fa-address-book-o"></i>&nbsp;Viper</a></li>', matches: 0},

    {name: 'Viper Viper', tags: ' ! character person viper nick nicholas lawyer ramsay ninja snake rope dart long fist Changquan China Chinese asian', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-viper-viper"><i class="fa fa-user"></i>&nbsp;Viper</a></li>', matches: 0},

    {name: 'JP', tags: ' ! character person viper yang jian jonathan pan jp Monk spade monk\'s monks spade hook sword eye China Chinese asian three eyed warrior', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-viper-jp"><i class="fa fa-user"></i>&nbsp;Three Eyed Warrior</a></li>', matches: 0},

    {name: 'Tongyi', tags: ' ! character person viper Tongyi Shen Yum cha chef dumpling restaurant lucky moon China Chinese asian', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-viper-tongyi"><i class="fa fa-user"></i>&nbsp;Tongyi Shen</a></li>', matches: 0},

    {name: 'Patton', tags: ' ! character person villain viper major lewis patton soldier military fort darling brave helmet alpha mind control', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-viper-patton"><i class="fa fa-user"></i>&nbsp;Major Patton</a></li>', matches: 0},

    {name: 'Longying', tags: ' ! viper Longying China Chinese asian group syndicate gang', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-viper-long"><i class="fa fa-users"></i>&nbsp;Longying</a></li>', matches: 0},


    {name: 'Spectre', tags: ' ! sub universe silver spectre vigilante', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-spectre"><i class="fa fa-address-book-o"></i>&nbsp;Silver Spectre</a></li>', matches: 0},

    {name: 'Silver Spectre', tags: ' ! character person silver spectre vigilante hugo johannsen ghost grey phantom uhmwpe depression naive ignorant innocent depressed shock gloves intangible physics ', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-spectre-spectre"><i class="fa fa-user"></i>&nbsp;Silver Spectre</a></li>', matches: 0},

    {name: 'Red Rhino', tags: ' ! character person vigilante dylan jenkin wrestler substax growth wrestling society scientist biotechnology biotechnologist addiction strength giant huge strong steroids drugs red rhino', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-spectre-rhino"><i class="fa fa-user"></i>&nbsp;Red Rhino</a></li>', matches: 0},

    {name: 'ExoCorp', tags: ' ! group evil exocorp corp company technology science corporation', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-spectre-corp"><i class="fa fa-users"></i>&nbsp;ExoCorp</a></li>', matches: 0},

    {name: 'Philip Dean', tags: ' ! character person villain vigilante philip dean rich man exocorp', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-spectre-dean"><i class="fa fa-user"></i>&nbsp;Philip Dean</a></li>', matches: 0},

    {name: 'Velvet Knights', tags: ' ! group mercenaries exocorp hitmen velvet knights arthur alastair hughes galahad lancelot gawain geraint percival lamorak kay gareth bedivere gaheris tristan kray brothers hired round table criminals gangs richardson twins', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-spectre-velvet"><i class="fa fa-users"></i>&nbsp;Velvet Knights</a></li>', matches: 0},

    {name: 'Gilgamesh', tags: ' ! character person villain daniel watson gilgamesh the director wrestling society power fists wrestle disabled', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-spectre-daniel"><i class="fa fa-user"></i>&nbsp;Gilgamesh</a></li>', matches: 0},

    {name: 'Sydney Guard', tags: ' ! group sydney guard silver spectre mockingbird team dean red rhino hugo johansenn dylan jenkin siena mitchell vigilantes north sergeant jonah riley', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-spectre-guard"><i class="fa fa-users"></i>&nbsp;Sydney Guard</a></li>', matches: 0},


    {name: 'Echo 59', tags: ' ! sub universe echo 59 vigilante', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-echo"><i class="fa fa-address-book-o"></i>&nbsp;Echo 59</a></li>', matches: 0},

    {name: 'Echo 59', tags: ' ! sub universe echo 59 vigilante forensic artist policewoman police officer detective sound megaphone frequency pitch volume trauama psycological cop sonic fear glock e59 north sydney composite drawing art diagram', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-echo-echo"><i class="fa fa-user"></i>&nbsp;Echo 59</a></li>', matches: 0},

    {name: 'Sergeant Riley', tags: ' ! sub universe echo 59 vigilante policeman police officer cop cars glock driving driver charming cleaver greene informant rake self destructive drunk sergeant jonah riley romeo', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-mockingbird"><i class="fa fa-user"></i>&nbsp;Sergeant Riley</a></li>', matches: 0},


    {name: 'Burning Hand', tags: ' ! sub universe burning hand vigilante', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-kyle"><i class="fa fa-address-book-o"></i>&nbsp;Burning Hand</a></li>', matches: 0},

    {name: 'Burning Hand', tags: ' ! burning hand vigilante indian kickboxing taekwondo counsellor martial arts teacher bagh naka chakram kolkata asri nanda sweating fire flame flaming tiger claws', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-kyle-kyle"><i class="fa fa-user"></i>&nbsp;Burning Hand</a></li>', matches: 0},

    {name: 'Dexter Barker', tags: ' ! burning hand dexter barker bus driver transport friend hope soup kitchin', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-kyle-dexter"><i class="fa fa-user"></i>&nbsp;Dexter Barker</a></li>', matches: 0},

    {name: 'Adam Crespo', tags: ' ! burning hand adam crespo drug dealer criminal vigilante person antihero cannabis bombs bikies gangs farm brother zack liam motorcycle motorbike streetfighter sawed off shotgun gas mask revenge redemption', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-kyle-crespo"><i class="fa fa-user"></i>&nbsp;Adam Crespo</a></li>', matches: 0},


    {name: 'Jack Kitchin', tags: ' ! sub universe jack kitchin vigilantes', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-kitchin"><i class="fa fa-address-book-o"></i>&nbsp;Jack Kitchin</a></li>', matches: 0},

    {name: 'Jack Kitchin', tags: ' ! jack kitchin sedgley probability manipulation gambling las vegas unlucky lucky fortunate vigilante', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-kitchin-kitchin"><i class="fa fa-user"></i>&nbsp;Jack Kitchin</a></li>', matches: 0},

    {name: 'Cosmologist', tags: ' ! cole johnson jack kitchin interdimensional interdimensionals time manipulation pocket hipster universe clairvoyance foresight preacher gay french longevity dimensions dimensional travel the cosmologist', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-kitchin-cole"><i class="fa fa-user"></i>&nbsp;Cosmologist</a></li>', matches: 0},

    {name: 'Ruby Keeler-Milne', tags: ' ! ruby keeler milne jack kitchin interdimensional interdimensionals space illusions manipulation dress universe telepathy existential french les apaches longevity dimensions dimensional', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-kitchin-ruby"><i class="fa fa-user"></i>&nbsp;Ruby Keeler-Milne</a></li>', matches: 0},

    {name: 'Will Salkeld', tags: ' ! will salkeld jack kitchin politics politician house of representatives lover good negotiator diplomat', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-kitchin-will"><i class="fa fa-user"></i>&nbsp;Will Salkeld</a></li>', matches: 0},


    {name: 'Nick', tags: ' ! ', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-nick"><i class="fa fa-smile-o"></i>&nbsp;Nick\'s Secret Page</a></li>', matches: 0},

    {name: 'Hunter', tags: ' ! ', element: '<li class="search-list-item"><a onclick="SearchLinkPressed(this)" class="link-page link-page-hunter"><i class="fa fa-smile-o"></i>&nbsp;Hunter\'s Secret Page</a></li>', matches: 0}
];
var SearchOptionsDisplay;

//Search for no value - Hides search elements
Search();

//On Search
function Search(){

    //Reset SearchOptionsDisplay
    SearchOptionsDisplay = [];

    //Get SearchTerm
    var SearchTerm = document.getElementById("search-input").value.toLowerCase();

    //Check if Search Bar is Empty
    if(SearchTerm == ""){
        $(".search-label").slideUp();
        $(".search-list").slideUp();
    }
    else{
        $(".search-label").slideDown();
        $(".search-list").slideDown();
    }

    var li = $(".search-list-item");
    var attr = "", html = "";

    //Find Matches for Each Element
    var LargestMatch = 0;
    for(var x = 0; x < SearchOptions.length; x++){

        html = SearchOptions[x].element;
        //SearchOptions[x].matches = html.search(SearchTerm);
        SearchOptions[x].matches = SearchOptions[x].tags.toLowerCase().search(SearchTerm);

        if(SearchOptions[x].matches > LargestMatch){
            LargestMatch = SearchOptions[x].matches;
        }
    }

    //Order The Elements By Matches
    var SearchAccuracy = 2;
    for(var y = LargestMatch; y > 0; y--){
        for(var x = 0; x < SearchOptions.length; x++){
            if(SearchOptions[x].matches == y){
                SearchOptionsDisplay.push(SearchOptions[x].element);
            }
        }
    }

    //Write to Page
    $(".search-list").html(SearchOptionsDisplay.join(""));
}

var SearchListItem = $('.search-list-item');
SearchListItem.click(function(){
    SearchLinkPressed($(this));
});

var SearchBar = $('#search-input');

SearchBar.keyup(function(){
    Search();
});




