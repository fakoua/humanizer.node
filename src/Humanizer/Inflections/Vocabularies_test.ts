import { test, assertEquals } from "../../../test_deps.ts";
import { Vocabularies } from './Vocabularies.ts'

test(function test_vocabularies_singularizeSkipSimpleWords() {
    assertEquals("tires", Vocabularies.Default().singularize("tires", false, true))
    assertEquals("body", Vocabularies.Default().singularize("bodies", false, true))
    assertEquals("traxxas", Vocabularies.Default().singularize("traxxas", false, true))
})

test(function test_vocabularies_pluralize() {
    for (const x of GetEnumerator()) {
        assertEquals(x[1], Vocabularies.Default().pluralize(x[0]))
    }
})

test(function test_vocabularies_singularize() {
    for (const x of GetEnumerator()) {
        assertEquals(x[0], Vocabularies.Default().singularize(x[1]))
    }
})

function* GetEnumerator() {
    yield ["search", "searches"];
    yield ["switch", "switches"];
    yield ["fix", "fixes"];
    yield ["box", "boxes"];
    yield ["process", "processes"];
    yield ["address", "addresses"];
    yield ["case", "cases"];
    yield ["stack", "stacks"];
    yield ["wish", "wishes"];
    yield ["fish", "fish"];

    yield ["category", "categories"];
    yield ["query", "queries"];
    yield ["ability", "abilities"];
    yield ["agency", "agencies"];
    yield ["movie", "movies"];

    yield ["archive", "archives"];

    yield ["index", "indices"];

    yield ["wife", "wives"];
    yield ["safe", "saves"];
    yield ["half", "halves"];

    yield ["move", "moves"];

    yield ["salesperson", "salespeople"];
    yield ["person", "people"];

    yield ["spokesman", "spokesmen"];
    yield ["man", "men"];
    yield ["woman", "women"];
    yield ["freshman", "freshmen"];
    yield ["chairman", "chairmen"];
    yield ["human", "humans"];
    yield ["personnel", "personnel"];
    yield ["staff", "staff"];
    yield ["training", "training"];

    yield ["basis", "bases"];
    yield ["diagnosis", "diagnoses"];

    yield ["datum", "data"];
    yield ["medium", "media"];
    yield ["analysis", "analyses"];

    yield ["node_child", "node_children"];
    yield ["child", "children"];

    yield ["experience", "experiences"];
    yield ["day", "days"];

    yield ["comment", "comments"];
    yield ["foobar", "foobars"];
    yield ["newsletter", "newsletters"];

    yield ["old_news", "old_news"];
    yield ["news", "news"];

    yield ["series", "series"];
    yield ["species", "species"];

    yield ["quiz", "quizzes"];

    yield ["perspective", "perspectives"];

    yield ["ox", "oxen"];
    yield ["photo", "photos"];
    yield ["buffalo", "buffaloes"];
    yield ["tomato", "tomatoes"];
    yield ["dwarf", "dwarves"];
    yield ["elf", "elves"];
    yield ["information", "information"];
    yield ["equipment", "equipment"];
    yield ["bus", "buses"];
    yield ["status", "statuses"];
    yield ["status_code", "status_codes"];
    yield ["mouse", "mice"];

    yield ["louse", "lice"];
    yield ["house", "houses"];
    yield ["octopus", "octopi"];
    yield ["alias", "aliases"];
    yield ["portfolio", "portfolios"];
    yield ["criterion", "criteria"];

    yield ["vertex", "vertices"];
    yield ["matrix", "matrices"];

    yield ["axis", "axes"];
    yield ["testis", "testes"];
    yield ["crisis", "crises"];

    yield ["corn", "corn"];
    yield ["milk", "milk"];
    yield ["rice", "rice"];
    yield ["shoe", "shoes"];

    yield ["horse", "horses"];
    yield ["prize", "prizes"];
    yield ["edge", "edges"];

    /* Tests added by Bas Jansen */
    yield ["goose", "geese"];
    yield ["deer", "deer"];
    yield ["sheep", "sheep"];
    yield ["wolf", "wolves"];
    yield ["volcano", "volcanoes"];
    yield ["aircraft", "aircraft"];
    yield ["alumna", "alumnae"];
    yield ["alumnus", "alumni"];
    yield ["fungus", "fungi"];
    yield ["water", "water"];
    yield ["waters", "waters"];
    yield ["semen", "semen"];
    yield ["sperm", "sperm"];

    yield ["wave", "waves"];

    yield ["campus", "campuses"];

    yield ["is", "are"];

    yield ["addendum", "addenda"];
    yield ["alga", "algae"];
    yield ["apparatus", "apparatuses"];
    yield ["appendix", "appendices"];
    yield ["bias", "biases"];
    yield ["bison", "bison"];
    yield ["blitz", "blitzes"];
    yield ["buzz", "buzzes"];
    yield ["cactus", "cacti"];
    yield ["corps", "corps"];
    yield ["curriculum", "curricula"];
    yield ["database", "databases"];
    yield ["die", "dice"];
    yield ["echo", "echoes"];
    yield ["ellipsis", "ellipses"];
    yield ["elk", "elk"];
    yield ["emphasis", "emphases"];
    yield ["embargo", "embargoes"];
    yield ["focus", "foci"];
    yield ["foot", "feet"];
    yield ["fuse", "fuses"];
    yield ["grass", "grass"];
    yield ["hair", "hair"];
    yield ["hero", "heroes"];
    yield ["hippopotamus", "hippopotami"];
    yield ["hoof", "hooves"];
    yield ["iris", "irises"];
    yield ["larva", "larvae"];
    yield ["leaf", "leaves"];
    yield ["loaf", "loaves"];
    yield ["luggage", "luggage"];
    yield ["means", "means"];
    yield ["mail", "mail"];
    yield ["millennium", "millennia"];
    yield ["moose", "moose"];
    yield ["mosquito", "mosquitoes"];
    yield ["mud", "mud"];
    yield ["nucleus", "nuclei"];
    yield ["neurosis", "neuroses"];
    yield ["oasis", "oases"];
    yield ["offspring", "offspring"];
    yield ["paralysis", "paralyses"];
    yield ["phenomenon", "phenomena"];
    yield ["potato", "potatoes"];
    yield ["radius", "radii"];
    yield ["salmon", "salmon"];
    yield ["scissors", "scissors"];
    yield ["shrimp", "shrimp"];
    yield ["someone", "someone"];
    yield ["stimulus", "stimuli"];
    yield ["swine", "swine"];
    yield ["syllabus", "syllabi"];
    yield ["that", "those"];
    yield ["thief", "thieves"];
    yield ["this", "these"];
    yield ["tooth", "teeth"];
    yield ["torpedo", "torpedoes"];
    yield ["trellis", "trellises"];
    yield ["trout", "trout"];
    yield ["tuna", "tuna"];
    yield ["vertebra", "vertebrae"];
    yield ["veto", "vetoes"];
    yield ["virus", "viruses"];
    yield ["walrus", "walruses"];
    yield ["waltz", "waltzes"];
    yield ["zombie", "zombies"];

    yield ["cookie", "cookies"];
    yield ["bookie", "bookies"];
    yield ["rookie", "rookies"];
    yield ["roomie", "roomies"];
    yield ["smoothie", "smoothies"];

    //Issue #789
    yield ["cache", "caches"];
}