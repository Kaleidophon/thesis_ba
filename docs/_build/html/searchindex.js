Search.setIndex({envversion:49,filenames:["index","modules","src","src.clustering","src.eval","src.mapping","src.misc","src.prep","src.prep.corpus","src.prep.nes","src.prep.relations","src.trans_e"],objects:{"src.clustering":{cluster_mappings:[3,0,0,"-"]},"src.clustering.cluster_mappings":{aggregate_cluster:[3,1,1,""],cluster_mappings:[3,1,1,""],get_cluster_size:[3,1,1,""],init_argparser:[3,1,1,""],load_indices:[3,1,1,""],load_mappings_from_model:[3,1,1,""],main:[3,1,1,""],resolve_indices:[3,1,1,""],train_clustering_parameters:[3,1,1,""]},"src.eval":{analogy:[4,0,0,"-"],eval_vectors:[4,0,0,"-"],word_similarity:[4,0,0,"-"]},"src.eval.analogy":{analogy_eval:[4,1,1,""],read_analogies:[4,1,1,""]},"src.eval.eval_vectors":{find_nearest_neighbors:[4,1,1,""],init_argparser:[4,1,1,""],main:[4,1,1,""],plot:[4,1,1,""]},"src.eval.word_similarity":{evaluate_wordpair_sims:[4,1,1,""],read_wordpairs:[4,1,1,""],remove_unknowns:[4,1,1,""],word_sim_eval:[4,1,1,""]},"src.mapping":{mapthreading:[5,0,0,"-"]},"src.mapping.mapthreading":{MappingMasterThread:[5,2,1,""],MappingWorkerThread:[5,2,1,""],VectorDict:[5,2,1,""],alt:[5,1,1,""],init_argparse:[5,1,1,""],main:[5,1,1,""]},"src.mapping.mapthreading.MappingMasterThread":{prepare:[5,3,1,""],read_ids_file:[5,3,1,""],start_threads:[5,3,1,""]},"src.mapping.mapthreading.MappingWorkerThread":{cosine_similarity:[5,3,1,""],distance:[5,3,1,""],euclidean_distance1:[5,3,1,""],euclidean_distance2:[5,3,1,""],hash_indices:[5,3,1,""],manhattan_distance:[5,3,1,""],run:[5,3,1,""],soft_cosine_similarity:[5,3,1,""]},"src.mapping.mapthreading.VectorDict":{add_skippable:[5,3,1,""],add_vector:[5,3,1,""],get_keys:[5,3,1,""],get_vector:[5,3,1,""],skippable:[5,3,1,""]},"src.misc":{decorators:[6,0,0,"-"],helpers:[6,0,0,"-"]},"src.misc.decorators":{log_time:[6,1,1,""]},"src.misc.helpers":{alt:[6,1,1,""],capitalize:[6,1,1,""],contains_tag:[6,1,1,""],extract_sentence_id:[6,1,1,""],format_fbid:[6,1,1,""],load_vectors:[6,1,1,""],load_vectors_from_model:[6,1,1,""],partitions_list:[6,1,1,""],read_dataset:[6,1,1,""]},"src.prep.corpus":{convert_to_plain:[8,0,0,"-"],extract_conll:[8,0,0,"-"],mapper:[8,0,0,"-"],reducer:[8,0,0,"-"]},"src.prep.corpus.convert_to_plain":{convert_decow_to_plain:[8,1,1,""],convert_part:[8,1,1,""],convert_part_merging:[8,1,1,""],extract_named_entity:[8,1,1,""],get_file_number:[8,1,1,""],main:[8,1,1,""]},"src.prep.corpus.extract_conll":{extract_conll:[8,1,1,""],init_argparse:[8,1,1,""],main:[8,1,1,""]},"src.prep.nes":{extract_nes:[9,0,0,"-"],merge:[9,0,0,"-"],statistics:[9,0,0,"-"]},"src.prep.nes.extract_nes":{extract_named_entity:[9,1,1,""],main:[9,1,1,""],process:[9,1,1,""],write_dict_into_file:[9,1,1,""],write_ids_into_file:[9,1,1,""]},"src.prep.nes.merge":{freq_worker:[9,1,1,""],id_worker:[9,1,1,""],main:[9,1,1,""],merge_dicts:[9,1,1,""],merge_frequency_files:[9,1,1,""],merge_id_dicts:[9,1,1,""],merge_id_files:[9,1,1,""],rl:[9,1,1,""]},"src.prep.nes.statistics":{calculate_occurrences:[9,1,1,""],main:[9,1,1,""]},"src.prep.relations":{relations:[10,0,0,"-"]},"src.prep.relations.relations":{MissingTranslationException:[10,4,1,""],fetch_name:[10,1,1,""],fetch_relation_triples_of_file:[10,1,1,""],freebase_request:[10,1,1,""],init_optparser:[10,1,1,""],main:[10,1,1,""],read_credentials:[10,1,1,""],rl:[10,1,1,""]},"src.prep.relations.relations.MissingTranslationException":{get_id:[10,3,1,""]},"src.trans_e":{add_inverse_relations:[11,0,0,"-"],contains_entities:[11,0,0,"-"],differentiate_datasets:[11,0,0,"-"],partition_data:[11,0,0,"-"],trans_we:[11,0,0,"-"]},"src.trans_e.add_inverse_relations":{add_inverse_relations:[11,1,1,""],init_argparse:[11,1,1,""],main:[11,1,1,""],read_file_with_inverse_relations:[11,1,1,""]},"src.trans_e.contains_entities":{contains_entities:[11,1,1,""],create_new_dataset:[11,1,1,""],extract_entities_from_relation_dataset:[11,1,1,""],extract_entities_from_tql_file:[11,1,1,""],init_argparse:[11,1,1,""],main:[11,1,1,""]},"src.trans_e.differentiate_datasets":{compare_entities:[11,1,1,""],init_argparse:[11,1,1,""],main:[11,1,1,""]},"src.trans_e.partition_data":{check_data_integrity:[11,1,1,""],check_set_integrity:[11,1,1,""],get_stats:[11,1,1,""],init_argparse:[11,1,1,""],main:[11,1,1,""],partition_data:[11,1,1,""],partition_relation_wise:[11,1,1,""],partition_whole:[11,1,1,""],read_only_relations_into_set:[11,1,1,""],write_data_in_file:[11,1,1,""]},"src.trans_e.trans_we":{convert_data:[11,1,1,""],create_corrupt_triples:[11,1,1,""],dump_relation_vectors:[11,1,1,""],evaluate:[11,1,1,""],extract_data_from_uri:[11,1,1,""],get_rank:[11,1,1,""],init_argparser:[11,1,1,""],load_relation_vectors:[11,1,1,""],main:[11,1,1,""],prepare_training:[11,1,1,""],rank_entities:[11,1,1,""],read_freebase_data:[11,1,1,""],read_tql_file:[11,1,1,""],test_coverage:[11,1,1,""],train:[11,1,1,""],transform_triples:[11,1,1,""],write_data:[11,1,1,""]},src:{mapping:[5,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:exception"},terms:{"50th":4,"__main__":8,"__name__":8,"boolean":11,"case":[3,5,10,11],"class":[5,8,10],"default":10,"float":[3,4,5,6,11],"function":[2,3,4,5,6,8,9,10,11],"int":[3,4,5,6,8,11],"new":[5,6,9,11],"return":[3,4,5,6,8,9,10,11],"true":11,"try":5,"while":[5,9,10],about:[3,9,10,11],accord:6,accordingli:4,actual:11,acut:4,add:[5,11],add_inverse_rel:[],add_skipp:5,add_vector:5,after:[4,5],afterward:[8,11],against:11,aggregate_clust:3,aim:9,all:[2,3,4,5,8,9,11],alloc:5,alreadi:5,also:[8,9,11],alt:[5,6],among:5,amount:[3,11],analog:[],analogi:4,analogy_ev:4,analogy_path:4,analys:11,answer:4,anymor:10,api:[10,11],api_kei:10,appear:11,approach:11,argpars:[3,4,5,8,11],argstupl:8,argument:[3,4,5,8,9,10,11],argumentpars:[3,4,5,8,11],aroud:6,around:6,arrai:[3,5,6,11],arrang:3,ascend:11,assign:[3,4,11],augment:11,availabl:11,avoid:4,badli:11,base:[4,5,10],bash:8,becaus:[3,5,9,10,11],been:[5,10],befor:[3,5],belong:[3,5],between:[4,5],bool:[3,4,5,6,8,9],bord:11,bore:4,both:11,calcul:[3,4,5,9],calculate_occurr:9,can:[4,5,8,11],cannot:[9,10],capit:6,cat:8,check:[5,6,11],check_data_integr:11,check_set_integr:11,choos:5,circl:3,cluster:[],cluster_map:[],code:[2,8,10,11],coeffici:4,collect:9,column:8,combin:5,command:[3,4,5,8,9,10,11],compar:11,compare_ent:11,complet:4,comput:[3,5],concaten:9,conduct:4,conll:8,consid:5,consist:11,constant:6,constraint:5,contain:[2,6,11],containedbi:11,contains_ent:[],contains_tag:6,content:[],continu:11,contrast:11,convert:8,convert_data:11,convert_decow_to_plain:8,convert_part:8,convert_part_merg:8,convert_to_plain:[],core:3,corpu:[],correct:[4,11],correl:4,correspond:[3,5,6,9,11],corrupt:11,cosin:[4,5],cosine_similar:5,cosmul:4,count:8,coverag:11,creat:[3,5,9,11],create_corrupt_tripl:11,create_new_dataset:11,creation:2,credenti:10,cryptic:10,current:[6,8,9],custer:3,data:[3,4,5,11],data_inpath:11,datapoint:3,dataset:[5,6,9,10,11],dataset_inpath:11,datatset:11,dbscan:3,declar:3,decor:[],decow14x:8,decow:8,decow_dir:8,defaultdict:[3,5,11],deprec:[10,11],design:11,desir:11,determin:[4,11],dict:[4,9,10,11],dictionari:[3,4,5,6,9,10,11],dicttupl:9,didn:11,differ:[2,5,11],differentiate_dataset:[],dimens:[3,4],dir_outpath:8,directori:[8,9,11],dirti:5,display_nam:4,dissimilar:4,distanc:5,distribut:[5,11],divid:2,do_pca:3,don:5,dot:11,due:8,dump:11,dump_relation_vector:11,each:11,easi:5,effici:9,embed:[2,4,5,6,11],end:[5,9],entiti:[8,9,10,11],entities1:11,entities2:11,entitii:[9,11],entri:8,epoch:11,epsilon:3,especi:4,euclidean:5,euclidean_distance1:5,euclidean_distance2:5,eval:[],eval_vector:[],evalu:[4,11],evaluat:[2,4,11],evaluate_wordpair_sim:4,everi:[3,5,8,11],exampl:11,except:10,exception:10,execut:[3,4,6],express:8,extract:[6,8,9,11],extract_conl:[],extract_data_from_uri:11,extract_entities_from_relation_dataset:11,extract_entities_from_tql_fil:11,extract_n:[],extract_named_ent:[8,9],extract_sentence_id:6,fals:[3,4,6,9],fanci:4,fb14k:11,fb15k:[10,11],fbid:[6,10],feasibl:8,featur:5,fetch_nam:10,fetch_relation_triples_of_fil:10,few:[9,11],figur:3,file:[3,4,5,6,8,9,10,11],filenam:8,find:[4,9,10],find_nearest_neighbor:4,finish:5,first:[4,5,11],fit:11,fix:5,flag:[3,4,6,8,9,11],follow:[3,4,5,6,11],format:[3,4,5,6,8,9,11],format_fbid:6,forn:11,found:[3,4,10,11],found_ent:11,freebas:[6,9,10,11],freebase_request:10,freq_work:9,freqpath:9,frequenc:[8,9],frequent:4,from:[2,3,4,5,6,8,9,10,11],func:[5,6,11],fundament:2,gener:6,gensim:[6,11],ger14k:11,german:10,get:[4,5,8,11],get_cluster_s:3,get_file_numb:8,get_id:10,get_kei:5,get_rank:11,get_stat:11,get_vector:5,given:[3,5,6,10,11],good:4,googl:4,group:11,grouped_corrupt:11,grouped_pair:11,grouped_test:11,grouped_train:11,grouped_valid:11,guarante:5,gzip:9,handi:11,handl:9,hash:5,hash_indic:5,have:[3,4,8,10,11],header:4,helper:[],here:11,heurist:4,higher:4,highest:11,hit:11,howev:10,huge:8,human:4,id_work:9,idl:5,ids_inpath:5,includ:10,index:[0,3,4,5,6,11],index_hash:5,indic:[3,4,5,6,8,9],indices_inpath:[3,5],indir:11,infil:[9,10],infiles_path:9,inform:[8,11],init_argpars:[3,4,5,8,11],init_optpars:10,initi:5,initial:[3,4,5,8,10,11],inpath:[6,8,9,10,11],input:[8,9,10],insert:11,insid:10,inspir:2,instead:11,integ:11,integr:[10,11],interact:4,intersect:11,interv:[6,8],interval:8,intuit:11,invers:11,inverse_inpath:11,inverse_rel:11,isn:10,iter:5,joint:11,juli:[10,11],just:[3,4],kei:[3,4,5,6,9,10,11],label:3,lambda_:5,lang:10,languag:10,lazi:[9,10],learn:11,learning_r:11,least:5,length:6,let:4,levi:4,like:[4,8,11],limit:5,line:[3,4,5,6,8,9,10,11],list:[3,4,5,6,9,10,11],load:[3,5,6,11],load_indic:3,load_mappings_from_model:3,load_relation_vector:11,load_vector:6,load_vectors_from_model:6,local:[5,6],locat:11,lock:5,log:[6,8,9,10],log_interv:8,log_path:8,log_tim:6,log_time_mp:[],logfil:6,logpath:[6,9,10],look:[3,4,10,11],lookup:5,loss:11,lossf:11,made:5,main:[3,4,5,8,9,10,11],make:[8,11],manhattan:5,manhattan_dist:5,mani:5,manner:[9,11],map:[],map_vector:3,mapper:[],mapping_inpath:3,mappingmasterthread:5,mappingworkerthread:5,mapthread:[],margin:11,master:5,max_n:[4,6],maximum:[4,6],mean:[4,11],measur:4,memori:[5,9],merg:[],merge_dict:9,merge_frequency_fil:9,merge_id_dict:9,merge_id_fil:9,merge_n:8,messi:4,method:[4,8],metric:11,min_:3,min_sampl:3,minimum:3,misc:[],missingtranslationexcept:10,mode:4,model:[6,11],modifi:11,modul:[],more:[5,8],most:4,mql:10,multi:8,multipl:[2,5,8,9],multiprocess:8,must:11,name:[3,8,9,10,11],nearest:4,necessari:5,need:[3,8],neighbor:4,next:4,nois:11,none:[3,6,8],now:10,nowadai:11,number:[3,4,6,8,11],number_of_pair:4,numpi:[3,5,6,11],object:[3,4,5,8,10,11],occur:[5,9,11],occurr:[5,9],offer:4,offset:5,onc:11,onli:[4,8,9,11],onlin:11,only:11,open:8,oper:5,optim:3,option:[3,4,10,11],optionpars:10,origin:[3,4,6,11],other:[3,6],out:[3,8],out_dir:8,out_path:9,outdir:11,outfil:11,outpath:[8,9,10,11],output:[5,6,8,9],over:5,packag:[],page:0,pair:[2,3,4,5,6],paper:11,param:[],paramet:[3,4,5,6,8,9,10,11],pars:[3,4],parser:[3,4,5,8,10,11],part:[6,8,9],partit:[6,11],partition_data:[],partition_relation_wis:11,partition_whol:11,partitions_list:6,path:[3,4,5,6,8,9,10,11],pattern:[5,8],pca:3,pearson:4,per_sect:4,percentag:[4,6,9,11],perform:[3,4,11],pick:[3,4,5],picki:8,pipe:8,plain:8,plot:4,point:[3,4],pop:4,possibl:[3,4,5,8,10,11],pre:8,prep:[],prepar:[2,5,11],prepare_train:11,prepend:[5,6],present:[8,9,11],print:11,probabl:8,process:[5,8,9,10],produc:5,project:[2,10],provid:5,prt:[6,11],purg:4,purpos:5,put:4,python:8,quantifi:4,queri:10,queue:5,quit:[5,10],radiu:3,rais:10,rank:11,rank_ent:11,rate:[4,11],read:[3,4,5,6,9,10,11],read_analog:4,read_credenti:10,read_dataset:6,read_file_with_inverse_rel:11,read_freebase_data:11,read_ids_fil:5,read_only_relations_into_set:11,read_tql_fil:11,read_wordpair:4,real:[3,10,11],reason:11,receiv:5,recommend:5,reduc:[],redund:[5,9,10],refer:11,regard:[3,6],rel:9,relat:[],relation_typ:11,relation_vector:11,relations_inpath:11,relations_outpath:11,relations_path:9,relations_typ:11,remain:8,remov:[4,8,9,10,11],remove_clon:11,remove_unknown:4,represent:11,request:[6,10],requir:9,resolv:[3,10],resolve_indic:3,resourc:2,respons:10,result:[4,11],retriev:10,rho:4,right:[3,4,11],routin:11,row:6,run:[4,5],same:[4,11],sampl:11,satisfi:5,save:11,score:4,script:[2,3,4,5,8,9,10,11],search:0,second:[5,6,8,11],section:4,see:9,semant:11,semrel:4,send:10,sentenc:[5,6,9],separ:[3,4,6,11],serv:5,service_url:10,set1:11,set2:11,set:[5,11],sets_path:11,share:11,shorter:5,should:[3,4,5,6,8,9,10,11],show:10,show_plot:4,shown:4,shrunk:3,signific:4,similar:[4,5],simpl:11,simpli:9,simultan:8,singl:8,size:[3,5,6,11],skippabl:5,slave:5,soft:5,soft_cosine_similar:5,solut:11,some:11,sort:8,space:[3,4,5],specif:[5,8,11],sphinx:8,squar:5,stai:5,start:[5,8,9,10,11],start_thread:5,stat:11,state:8,statist:[],step:[8,11],still:[5,10,11],stop:[2,4],store:[5,9],str:[3,4,5,6,8,9,10,11],string:[6,10],strip:[9,10],structur:[4,5,11],student:4,style:6,sublist:3,submodul:[],subpackag:[],suitabl:[5,11],sum:11,sure:11,synchron:5,system:4,tab:[3,6],tag:[6,9],take:5,taken:11,target:[10,11],target_dim:[3,4],ten:11,termin:8,test:[4,11],test_coverag:11,testset:11,tet:11,text:8,thei:[5,9,11],them:[5,8,9,11],therefor:[4,9,11],thi:[2,3,4,5,6,8,9,10,11],those:[4,5,10,11],though:11,thow:10,thread:5,three:[6,11],thrown:10,time:[5,6,9,11],togeth:[5,8],top:11,tql:11,tql_inpath:11,tql_path:11,train:[2,8,11],train_clustering_paramet:3,trans_:[],trans_w:[],transe:[2,11],transform:[6,10],transform_tripl:11,translat:10,tri:[3,4],trigger:10,trilp:11,tripl:11,triplet:[10,11],tupl:[3,4,6,8,9,10,11],two:[4,5,9,11],txt:[6,8],type:[3,4,5,6,8,9,10,11],underscor:8,unfortun:10,unind:8,uniqu:[3,5,11],uri:[10,11],use:[8,11],user:5,usualli:4,valid:11,valu:[3,4,5,6,9,11],variou:9,vector:[2,3,4,5,6,11],vector_dict:5,vector_inpath:[3,4,5,6,11],vector_outpath:5,vector_queu:5,vectordict:5,veri:4,visual:4,wai:[5,11],well:[2,5,6,9],weren:4,where:[3,4,5,8,10,11],wherea:11,whether:[3,4,5,6,8,9,11],which:[5,11],whitespac:[9,10],whole:[4,8,10,11],why:11,wikidata:[10,11],window:4,wise:[4,11],within:11,without:8,wor:4,word2vec:[4,6,8,11],word:[2,3,4,5,6,8,11],word_sim_ev:4,word_similar:[],wordlist:4,wordpair:4,wordpair_path:4,work:5,worker:5,worker_id:5,wrap:[6,10],write:[9,11],write_data:11,write_data_in_fil:11,write_dict_into_fil:9,write_ids_into_fil:9,written:[8,9,10,11],xml:[6,9],yai:4,yaml:[5,9],you:[8,9],your:8},titles:["Welcome to Bachelor Thesis&#8217;s documentation!","src","src package","src.clustering package","src.eval package","src.mapping package","src.misc package","src.prep package","src.prep.corpus package","src.prep.nes package","src.prep.relations package","src.trans_e package"],titleterms:{add_inverse_rel:11,analog:4,bachelor:0,cluster:3,cluster_map:3,contains_ent:11,content:5,convert_to_plain:8,corpu:8,decor:6,differentiate_dataset:11,document:0,eval:4,eval_vector:4,extract_conl:8,extract_n:9,helper:6,indice:0,map:5,mapper:8,mapthread:5,merg:9,misc:6,modul:[3,4,5,6,8,9,10,11],packag:[2,3,4,5,6,7,8,9,10,11],partition_data:11,prep:[7,8,9,10],reduc:8,relat:10,src:[0,1,2,3,4,5,6,7,8,9,10,11],statist:9,submodul:[],subpackag:[2,7],tabl:0,thesi:0,trans_:11,trans_w:11,welcom:0,word_similar:4}})