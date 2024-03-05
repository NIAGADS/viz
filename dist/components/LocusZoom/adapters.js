import t from"locuszoom";import r from"./config.js";const e=t.Adapters.get("AssociationLZ"),a=t.Adapters.get("LDServer"),n=t.Adapters.get("GeneLZ"),s=t.Adapters.get("RecombLZ");class o extends e{_getURL(t){let{chr:r,start:e,end:a,track:n}=t;return`${this._url}/gwas?track=${n}&chromosome=${r}&start=${Math.trunc(e)}&end=${Math.trunc(a)}`}_buildRequestOptions(t,...r){const e=this._config.initial_state;return Object.assign({chr:t.chr?t.chr:e.chr,start:t.chr?t.start:e.start,end:t.chr?t.end:e.end,track:this._config.track},t)}_normalizeResponse(t,r){const{chr:e}=r;let a=JSON.parse(t);if(null==a.data.variant)return[];return a.data.variant.map(((t,r)=>({variant:t,pvalue:a.data.pvalue[r],log_pvalue:a.data.log_pvalue[r],chromosome:e,test_allele:a.data.test_allele[r],position:parseInt(a.data.position[r])})))}}class i extends s{_getURL(t){const{chr:r,start:e,end:a}=t;return`${this._url}/recomb?chromosome=${r}&start=${Math.trunc(e)}&end=${Math.trunc(a)}`}_buildRequestOptions(t,...r){const e=this._config.initial_state;return Object.assign({chr:t.chr?t.chr:e.chr,start:t.chr?t.start:e.start,end:t.chr?t.end:e.end},t)}}class l extends a{constructor(t){super(t)}__find_ld_refvar(t,r){const e=this._findPrefixedKey(r[0],"variant"),a=this._findPrefixedKey(r[0],"log_pvalue");let n="",s={};if(t.ldrefvar)n=t.ldrefvar,s=r.find((t=>t[e]===n))||{};else{let t=0;for(let o of r){const{[e]:r,[a]:i}=o;o.hasOwnProperty("lz_is_ld_refvar")&&delete o.lz_is_ld_refvar,i>t&&(t=i,n=r,s=o)}}return s.lz_is_ld_refvar=!0,n}_getURL(t){const{ld_population:r,ld_refvar:e}=t;return`${this._url}/linkage?population=${r}&variant=${e}`}_buildRequestOptions(t,e){if(!e)throw new Error("LD request must depend on association data");const a=super._buildRequestOptions(...arguments);if(!e.length)return a._skip_request=!0,a;const n=this._config.initial_state;t.ld_refvar||(t.ld_refvar=n.ldrefvar),a.ld_refvar=this.__find_ld_refvar(t,e);const s=t.ld_population?t.ld_population:n.population?n.population:r.DEFAULT_LD_POPULATION;return Object.assign({},a,{ld_population:s})}_normalizeResponse(t,r){const{ld_refvar:e}=r;if(null==e)return[];const[a,n,...s]=e.split(":"),o={variant1:e,variant2:e,chromosome1:a,chromosome2:a,correlation:1,position1:parseInt(n),position2:parseInt(n)};if(null==t.data.linked_variant[0])return[o];const i=t.data.linked_variant.map(((r,s)=>({variant1:e,variant2:r,chromosome1:a,chromosome2:a,correlation:t.data.r_squared[s],position1:parseInt(n),position2:parseInt(r.split(":")[1])})));return i.push(o),i}}class c extends n{_getURL(t){const{chr:r,start:e,end:a}=t;return`${this._url}/gene?chromosome=${r}&start=${Math.trunc(e)}&end=${Math.trunc(a)}`}_buildRequestOptions(t,...r){const e=this._config.initial_state;return Object.assign({chr:t.chr?t.chr:e.chr,start:t.chr?t.start:e.start,end:t.chr?t.end:e.end},t)}}export{o as CustomAssociationAdapter,c as CustomGeneAdapter,l as CustomLDServerAdapter,i as CustomRecombAdapter};
//# sourceMappingURL=adapters.js.map
