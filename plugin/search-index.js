var searchIndex = {};
searchIndex["dynasm"] = {"doc":"","items":[[5,"registrar","dynasm","",null,{"inputs":[{"name":"registry"}],"output":null}],[0,"parser","","",null,null],[3,"MemoryRef","dynasm::parser","",null,null],[12,"index","","",0,null],[12,"scale","","",0,null],[12,"scale_expr","","",0,null],[12,"base","","",0,null],[12,"disp","","",0,null],[12,"size","","",0,null],[12,"span","","",0,null],[3,"Register","","",null,null],[12,"size","","",1,null],[12,"kind","","",1,null],[4,"Item","","collections",null,null],[13,"Instruction","","",2,null],[13,"Label","","",2,null],[13,"Directive","","",2,null],[4,"Arg","","",null,null],[13,"Indirect","","",3,null],[13,"Direct","","",3,null],[13,"JumpTarget","","",3,null],[13,"IndirectJumpTarget","","",3,null],[13,"Immediate","","",3,null],[13,"Invalid","","",3,null],[4,"LabelType","","",null,null],[13,"Global","","",4,null],[13,"Local","","",4,null],[13,"Dynamic","","",4,null],[4,"JumpType","","",null,null],[13,"Global","","",5,null],[13,"Backward","","",5,null],[13,"Forward","","",5,null],[13,"Dynamic","","",5,null],[4,"RegKind","","",null,null],[13,"Static","","",6,null],[13,"Dynamic","","",6,null],[4,"RegId","","",null,null],[13,"RAX","","",7,null],[13,"RCX","","",7,null],[13,"RDX","","",7,null],[13,"RBX","","",7,null],[13,"RSP","","",7,null],[13,"RBP","","",7,null],[13,"RSI","","",7,null],[13,"RDI","","",7,null],[13,"R8","","",7,null],[13,"R9","","",7,null],[13,"R10","","",7,null],[13,"R11","","",7,null],[13,"R12","","",7,null],[13,"R13","","",7,null],[13,"R14","","",7,null],[13,"R15","","",7,null],[13,"RIP","","",7,null],[13,"AH","","",7,null],[13,"CH","","",7,null],[13,"DH","","",7,null],[13,"BH","","",7,null],[13,"ST0","","",7,null],[13,"ST1","","",7,null],[13,"ST2","","",7,null],[13,"ST3","","",7,null],[13,"ST4","","",7,null],[13,"ST5","","",7,null],[13,"ST6","","",7,null],[13,"ST7","","",7,null],[13,"MMX0","","",7,null],[13,"MMX1","","",7,null],[13,"MMX2","","",7,null],[13,"MMX3","","",7,null],[13,"MMX4","","",7,null],[13,"MMX5","","",7,null],[13,"MMX6","","",7,null],[13,"MMX7","","",7,null],[13,"XMM0","","",7,null],[13,"XMM1","","",7,null],[13,"XMM2","","",7,null],[13,"XMM3","","",7,null],[13,"XMM4","","",7,null],[13,"XMM5","","",7,null],[13,"XMM6","","",7,null],[13,"XMM7","","",7,null],[13,"XMM8","","",7,null],[13,"XMM9","","",7,null],[13,"XMM10","","",7,null],[13,"XMM11","","",7,null],[13,"XMM12","","",7,null],[13,"XMM13","","",7,null],[13,"XMM14","","",7,null],[13,"XMM15","","",7,null],[13,"ES","","",7,null],[13,"CS","","",7,null],[13,"SS","","",7,null],[13,"DS","","",7,null],[13,"FS","","",7,null],[13,"GS","","",7,null],[13,"CR0","","",7,null],[13,"CR1","","",7,null],[13,"CR2","","",7,null],[13,"CR3","","",7,null],[13,"CR4","","",7,null],[13,"CR5","","",7,null],[13,"CR6","","",7,null],[13,"CR7","","",7,null],[13,"CR8","","",7,null],[13,"CR9","","",7,null],[13,"CR10","","",7,null],[13,"CR11","","",7,null],[13,"CR12","","",7,null],[13,"CR13","","",7,null],[13,"CR14","","",7,null],[13,"CR15","","",7,null],[13,"DR0","","",7,null],[13,"DR1","","",7,null],[13,"DR2","","",7,null],[13,"DR3","","",7,null],[13,"DR4","","",7,null],[13,"DR5","","",7,null],[13,"DR6","","",7,null],[13,"DR7","","",7,null],[13,"DR8","","",7,null],[13,"DR9","","",7,null],[13,"DR10","","",7,null],[13,"DR11","","",7,null],[13,"DR12","","",7,null],[13,"DR13","","",7,null],[13,"DR14","","",7,null],[13,"DR15","","",7,null],[4,"RegFamily","","",null,null],[13,"LEGACY","","",8,null],[13,"RIP","","",8,null],[13,"HIGHBYTE","","",8,null],[13,"FP","","",8,null],[13,"MMX","","",8,null],[13,"XMM","","",8,null],[13,"SEGMENT","","",8,null],[13,"CONTROL","","",8,null],[13,"DEBUG","","",8,null],[4,"Size","","",null,null],[13,"BYTE","","",9,null],[13,"WORD","","",9,null],[13,"DWORD","","",9,null],[13,"QWORD","","",9,null],[13,"PWORD","","",9,null],[13,"OWORD","","",9,null],[13,"HWORD","","",9,null],[5,"parse","","",null,{"inputs":[{"name":"extctxt"},{"name":"parser"}],"output":{"name":"presult"}}],[6,"Ident","","",null,null],[11,"fmt","","",2,null],[11,"fmt","","",3,null],[11,"fmt","","",0,null],[11,"fmt","","",4,null],[11,"fmt","","",5,null],[11,"clone","","",1,null],[11,"fmt","","",1,null],[11,"clone","","",6,null],[11,"fmt","","",6,null],[11,"clone","","",7,null],[11,"hash","","",7,null],[11,"eq","","",7,null],[11,"fmt","","",7,null],[11,"clone","","",8,null],[11,"hash","","",8,null],[11,"cmp","","",8,null],[11,"eq","","",8,null],[11,"partial_cmp","","",8,null],[11,"fmt","","",8,null],[11,"clone","","",9,null],[11,"hash","","",9,null],[11,"cmp","","",9,null],[11,"eq","","",9,null],[11,"partial_cmp","","",9,null],[11,"fmt","","",9,null],[11,"new_static","","",1,{"inputs":[{"name":"size"},{"name":"regid"}],"output":{"name":"register"}}],[11,"new_dynamic","","",1,{"inputs":[{"name":"size"},{"name":"regfamily"},{"name":"p"}],"output":{"name":"register"}}],[11,"size","","",1,null],[11,"code","","",6,null],[11,"family","","",6,null],[11,"is_dynamic","","",6,null],[11,"is_extended","","",6,null],[11,"encode","","",6,null],[11,"from_number","","",6,{"inputs":[{"name":"u8"}],"output":{"name":"regkind"}}],[11,"eq","","",1,null],[11,"eq","","",6,null],[11,"code","","",7,null],[11,"family","","",7,null],[11,"from_number","","",7,{"inputs":[{"name":"u8"}],"output":{"name":"regid"}}],[11,"in_bytes","","",9,null],[0,"compiler","dynasm","",null,null],[3,"Opdata","dynasm::compiler","",null,null],[12,"args","","",10,null],[12,"ops","","",10,null],[12,"reg","","",10,null],[12,"flags","","",10,null],[3,"FormatStringIterator","","",null,null],[4,"Stmt","","",null,null],[13,"Const","","",11,null],[13,"ExprConst","","",11,null],[13,"Var","","",11,null],[13,"Extend","","",11,null],[13,"DynScale","","",11,null],[13,"Align","","",11,null],[13,"GlobalLabel","","",11,null],[13,"LocalLabel","","",11,null],[13,"DynamicLabel","","",11,null],[13,"GlobalJumpTarget","","",11,null],[13,"ForwardJumpTarget","","",11,null],[13,"BackwardJumpTarget","","",11,null],[13,"DynamicJumpTarget","","",11,null],[5,"compile","","",null,{"inputs":[{"name":"extctxt"},{"name":"vec"}],"output":{"name":"result"}}],[6,"StmtBuffer","","",null,null],[11,"fmt","","",11,null],[11,"clone","","",11,null],[11,"new","","",12,null],[11,"next","","",12,null],[0,"x64data","dynasm","",null,null],[5,"get_mnemnonic_data","dynasm::x64data","",null,{"inputs":[{"name":"str"}],"output":{"name":"option"}}],[5,"mnemnonics","","",null,{"inputs":[],"output":{"name":"keys"}}],[0,"flags","","",null,null],[3,"Flags","dynasm::x64data::flags","",null,null],[5,"flag_bits","","",null,{"inputs":[{"name":"flags"}],"output":{"name":"u32"}}],[5,"make_flag","","",null,{"inputs":[{"name":"u32"}],"output":{"name":"flags"}}],[17,"VEX_OP","","",null,null],[17,"XOP_OP","","",null,null],[17,"AUTO_SIZE","","",null,null],[17,"AUTO_NO32","","",null,null],[17,"AUTO_REXW","","",null,null],[17,"AUTO_VEXL","","",null,null],[17,"WORD_SIZE","","",null,null],[17,"WITH_REXW","","",null,null],[17,"WITH_VEXL","","",null,null],[17,"PREF_66","","",null,null],[17,"PREF_67","","",null,null],[17,"PREF_F0","","",null,null],[17,"PREF_F2","","",null,null],[17,"PREF_F3","","",null,null],[17,"LOCK","","",null,null],[17,"REP","","",null,null],[17,"REPE","","",null,null],[17,"SHORT_ARG","","",null,null],[17,"ENC_MR","","",null,null],[17,"ENC_VM","","",null,null],[11,"hash","","",13,null],[11,"cmp","","",13,null],[11,"partial_cmp","","",13,null],[11,"lt","","",13,null],[11,"le","","",13,null],[11,"gt","","",13,null],[11,"ge","","",13,null],[11,"clone","","",13,null],[11,"eq","","",13,null],[11,"ne","","",13,null],[11,"fmt","","",13,null],[11,"empty","","Returns an empty set of flags.",13,{"inputs":[],"output":{"name":"flags"}}],[11,"all","","Returns the set containing all flags.",13,{"inputs":[],"output":{"name":"flags"}}],[11,"bits","","Returns the raw value of the flags currently stored.",13,null],[11,"from_bits","","Convert from underlying bit representation, unless that\nrepresentation contains bits that do not correspond to a flag.",13,{"inputs":[{"name":"u32"}],"output":{"name":"option"}}],[11,"from_bits_truncate","","Convert from underlying bit representation, dropping any bits\nthat do not correspond to flags.",13,{"inputs":[{"name":"u32"}],"output":{"name":"flags"}}],[11,"is_empty","","Returns `true` if no flags are currently stored.",13,null],[11,"is_all","","Returns `true` if all flags are currently set.",13,null],[11,"intersects","","Returns `true` if there are flags common to both `self` and `other`.",13,null],[11,"contains","","Returns `true` all of the flags in `other` are contained within `self`.",13,null],[11,"insert","","Inserts the specified flags in-place.",13,null],[11,"remove","","Removes the specified flags in-place.",13,null],[11,"toggle","","Toggles the specified flags in-place.",13,null],[11,"bitor","","Returns the union of the two sets of flags.",13,null],[11,"bitor_assign","","Adds the set of flags.",13,null],[11,"bitxor","","Returns the left flags, but with all the right flags toggled.",13,null],[11,"bitxor_assign","","Toggles the set of flags.",13,null],[11,"bitand","","Returns the intersection between the two sets of flags.",13,null],[11,"bitand_assign","","Disables all flags disabled in the set.",13,null],[11,"sub","","Returns the set difference of the two sets of flags.",13,null],[11,"sub_assign","","Disables all flags enabled in the set.",13,null],[11,"not","","Returns the complement of this set of flags.",13,null],[11,"extend","","",13,null],[11,"from_iter","","",13,{"inputs":[{"name":"t"}],"output":{"name":"flags"}}],[0,"serialize","dynasm","",null,null],[5,"serialize","dynasm::serialize","",null,{"inputs":[{"name":"extctxt"},{"name":"ident"},{"name":"stmtbuffer"}],"output":{"name":"vec"}}],[5,"or_mask_shift_expr","","",null,{"inputs":[{"name":"extctxt"},{"name":"p"},{"name":"p"},{"name":"u64"},{"name":"i8"}],"output":{"name":"p"}}],[5,"offset_of","","",null,{"inputs":[{"name":"extctxt"},{"name":"path"},{"name":"ident"}],"output":{"name":"p"}}],[5,"size_of","","",null,{"inputs":[{"name":"extctxt"},{"name":"path"}],"output":{"name":"p"}}],[5,"encoded_size","","",null,{"inputs":[{"name":"extctxt"},{"name":"ident"},{"name":"p"}],"output":{"name":"p"}}],[0,"debug","dynasm","",null,null],[5,"format_opdata_list","dynasm::debug","",null,null],[5,"format_opdata","","",null,{"inputs":[{"name":"str"},{"name":"opdata"}],"output":{"name":"vec"}}]],"paths":[[3,"MemoryRef"],[3,"Register"],[4,"Item"],[4,"Arg"],[4,"LabelType"],[4,"JumpType"],[4,"RegKind"],[4,"RegId"],[4,"RegFamily"],[4,"Size"],[3,"Opdata"],[4,"Stmt"],[3,"FormatStringIterator"],[3,"Flags"]]};
searchIndex["lazy_static"] = {"doc":"A macro for declaring lazily evaluated statics.","items":[[8,"__Deref","lazy_static","The `Deref` trait is used to specify the functionality of dereferencing\noperations, like `*v`.",null,null],[16,"Target","","The resulting type after dereferencing",0,null],[10,"deref","","The method called to dereference a value",0,null],[0,"lazy","","",null,null],[3,"Lazy","lazy_static::lazy","",null,null],[12,"0","","",1,null],[12,"1","","",1,null],[11,"get","","",1,null],[14,"__lazy_static_create!","lazy_static","",null,null],[14,"lazy_static!","","",null,null]],"paths":[[8,"__Deref"],[3,"Lazy"]]};
searchIndex["bitflags"] = {"doc":"A typesafe bitmask flag generator.","items":[[14,"bitflags!","bitflags","The `bitflags!` macro generates a `struct` that holds a set of C-style\nbitmask flags. It is useful for creating typesafe wrappers for C APIs.",null,null]],"paths":[]};
initSearch(searchIndex);
var path = $(".location").text();
var nest_count;
if (path) {
    nest_count = path.split("::").length + 1;
} else {
    nest_count = 1;
}
if (window.location.pathname.endsWith("index.html")) {
  nest_count += 1;
}

var base_path = "";
for (i = 0; i < nest_count; i++) {
    base_path += "../";
}

$(".sidebar").prepend('\
  <p class="location">\
      <a href="' + base_path + 'language/index.html">dynasm-rs</a>\
  </p>\
  <div class = "block modules">\
  <h3>Components</h3>\
    <ul>\
      <li>\
        <a href="' + base_path + 'language/index.html">Syntax</a>\
      </li>\
      <li>\
        <a href="' + base_path + 'plugin/dynasm/index.html">Plugin (dynasm)</a>\
      </li>\
      <li>\
        <a href="' + base_path + 'runtime/dynasmrt/index.html">Runtime (dynasmrt)</a>\
      </li>\
    </ul>\
  </div>');
