import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from  'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

type Mode = 'production' | 'development'

interface EnvVariables{
	mode: Mode
	port: number
}


export default (env:EnvVariables) => {

	const config:webpack.Configuration ={	
		mode:env.mode ?? 'development',
		entry: path.resolve(__dirname, 'src', 'index.ts'),
		output:{
			path:path.resolve(__dirname, 'build'),
			filename:'[name].[contenthash].js',
			clean:true
		},
		plugins:[
			new HtmlWebpackPlugin({template:path.resolve(__dirname, 'src', 'index.html')}),
			new webpack.ProgressPlugin(),
			new MiniCssExtractPlugin()
		],
		module:{
			rules:[
				{
					test:/\.(scss|css)$/i,
					use:[{loader:MiniCssExtractPlugin.loader},'css-loader', 'postcss-loader', 'sass-loader'],
					
				},
				{
					test:/\.tsx?$/,
					use:'ts-loader',
					exclude:/node_modules/,
				},
				{
       				 test: /\.(png|jpe?g|gif)$/i,
					 type:'asset/resource'
      			},
			]
		},
		resolve:{
			extensions: ['.tsx','.ts','.js']
		},
		devtool:'inline-source-map',
		devServer:{
			port:env.port ?? 3000,
			open:true
		}
	}

	return config
}