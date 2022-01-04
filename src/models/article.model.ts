export interface ArticleHeadline {
    main: string;
}

export interface ArticleThumbnail {
    url: string;
    width: number;
    height: number;
    legacy: {
        widewidth: number;
        wideheight: number;
        wide: string;
    };
}

export default interface Article{
    _id: string;
    abstract?: string;
    multimedia?: ArticleThumbnail[];
    headline?: ArticleHeadline;
    lead_paragraph: string;
    section_name : string;
    web_url: string;
}

