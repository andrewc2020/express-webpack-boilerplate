export var __esModule: boolean;
declare namespace entry {
    const main: string;
}
declare namespace output {
    const path: any;
    const publicPath: string;
    const filename: string;
}
declare const target: string;
declare const devtool: string;
declare namespace optimization {
    const minimize: boolean;
    const minimizer: any[];
}
declare namespace module {
    const rules: ({
        test: RegExp;
        exclude: RegExp;
        use: {
            loader: string;
        };
    } | {
        test: RegExp;
        use: any[];
        exclude?: undefined;
    })[];
}
declare const plugins: any[];
export {};
