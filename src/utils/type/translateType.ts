// src/utils/type/translateType.ts
export default interface Translate {
    Home: {
        Hero: {
            header: string;
            description: string;
            Button: string;  // Perhatikan huruf B besar sesuai JSON
        };
        Services: {
            header: string;
            description: string;
        };
        Benefit: {
            header: string;
            description: string;
            item: Array<{
                title: string;
                description: string;
                path: string;
            }>;
        };
        Vision: {
            header: string;
            description: string;
        },
        ProjectPhase: {
            header: string;
            item: Array<{
                number: number,
                title: string,
                description: string
            }>
        },
        LastBlog: {
            title: string,
            description: string
        }
    };
    aboutUs: {
        Hero: {
            header: string,
            description: string,
            Button: string
        },
        sector: {
            header: string,
            description: string,
            category: Array<{ count: number; sector: string; }>
        },
        Client?:{
            t?:string;
        }
    };
    insight: {
        Hero: {
            header: string,
            description: string,
            Button: string
        },
        CategoryArticle: Array<{ value: string; label: string;}>
    },
    contact:{
        Hero: {
            header: string,
            description: string,
            Button: string
        },
    },
    common: {
        Testimony: {
            header: string;
            description: string;
            item: Array<{
                message: string;
                name: string;
                position: string;
            }>
        };
        ContactForm: {  // Perhatikan ejaan 'ContactFormm'
            header: string;
            description: string;
            button: string;
        };
        Navbar: {
            menu: Array<{
                title: string;
                href: string;
                submenu?: Array<{
                    category: string;
                }>
            }>
        };
        Footer: {
            Services: string;
            Insight: {
                t: string;
                category: Array<{
                    name: string;
                    href: string;
                }>
            }
        }
    };
}