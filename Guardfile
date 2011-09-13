# A sample Guardfile
# More info at https://github.com/guard/guard#readme
group 'backend' do
  guard 'bundler' do
    watch('Gemfile')
  end
	guard 'process', :name => 'npm', :command => 'npm install -d' do 
		watch('package.json')
	end
	guard 'process', :name => 'expresso', :command => 'expresso -l test/fast/*/*'  do
		watch('app.js')
	end
end
