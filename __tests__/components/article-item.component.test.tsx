import React from 'react';
import renderer from 'react-test-renderer';

import ArticleItem from '../../src/components/article-item/article-item.component';
import Article from '../../src/models/article.model';

let article: Article = {
    "abstract": "Monty Python's Spamalot leads field with 14 Tony Award nominations, including best musical and best director, Mike Nichols, as well as five acting nominations; best-musical nominees Dirty Rotten Scoundrels and The Light in the Piazza also make strong showings, with total of 11 nominations; The 25th Annual Putnam County Spelling Bee garners six nominations (M)",
    "web_url": "https://www.nytimes.com/2005/05/11/theater/spamalot-receives-14-shots-at-a-tony.html",
    "lead_paragraph": "\"Spamalot,\" the decidedly goofy musical adaptation of the 1975 cult film \"Monty Python and the Holy Grail,\" led all productions yesterday, as it bagged 14 Tony Award nominations, including nods for best musical; its director, Mike Nichols; and five of its actors.",
    "multimedia": [],
    "headline": {
        "main": "'Spamalot' Receives 14 Shots At a Tony",
    },
    "section_name": "Theater",
    "_id": "nyt://article/9f891bf5-23c7-5e94-8c62-c7e7e52c4d52",
};

describe('search-input.component test', () => {
    it('search-input.component should match snapshot', () => {
        const component = renderer.create(<ArticleItem item={article} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
