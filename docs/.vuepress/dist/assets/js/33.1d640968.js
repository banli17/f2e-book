(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{258:function(n,e,a){"use strict";a.r(e);var t=a(0),c=Object(t.a)({},(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"mongodb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongodb","aria-hidden":"true"}},[n._v("#")]),n._v(" mongodb")]),n._v(" "),a("h2",{attrs:{id:"是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#是什么","aria-hidden":"true"}},[n._v("#")]),n._v(" 是什么")]),n._v(" "),a("p",[n._v("mongodb 存储的是文档。")]),n._v(" "),a("h2",{attrs:{id:"基本操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本操作","aria-hidden":"true"}},[n._v("#")]),n._v(" 基本操作")]),n._v(" "),a("p",[n._v("create\nread\nupdate\ndelete\ncrud")]),n._v(" "),a("p",[n._v("文档主键"),a("code",[n._v("_id")])]),n._v(" "),a("ul",[a("li",[n._v("文档主键的唯一性")]),n._v(" "),a("li",[n._v("支持所有数据类型(数组除外)")])]),n._v(" "),a("p",[n._v("对象主键 ObjectId")]),n._v(" "),a("ul",[a("li",[n._v("默认的文档主键")]),n._v(" "),a("li",[n._v("可以快速生成 12 字节 id")]),n._v(" "),a("li",[n._v("包含创建时间\n"),a("ul",[a("li",[n._v("同一时间生成的对象，无法精确区分")]),n._v(" "),a("li",[n._v("是根据服务器时间来的，如果每个服务器时间不同，会造成顺序不匹配")])])])]),n._v(" "),a("p",[n._v("创建文档")]),n._v(" "),a("ul",[a("li",[n._v("db.collection.insert()")]),n._v(" "),a("li",[n._v("db.collection.save() 创建单一文档")]),n._v(" "),a("li",[n._v("创建多个文档")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('use test\n\nshow collections\n\n# 会自动创建相应的集合\ndb.collection.insertOne(\n    <document>,\n    writeConcern: <document>\n)\n\n# writeConcern 本次文档创建操作的安全写级别，安全写级别用来判断一次数据库写入操作是否成功\n# 安全写级别越高，丢失数据风险越低，但是写入操作延迟越高\n# 不提供则使用默认安全写级别\n\n# 将文档写入 accounts 集合\n# insertOne 会自动创建相应的集合 accounts\ndb.accounts.insertOne(\n    {\n        _id: \'account1\',\n        name: \'alice\',\n        balance: 100\n    }\n)\n{"acknowledged": true, "insertedId": "account1"}\nacknowledged true 表示安全写级别被启用\ninsertedId 显示了被写入的文档的 _id\n\n# 插入重复的文档，文档主键必须唯一，否则报错\ntry{\n   db.accounts.insertOne(\n        {\n            _id: \'account1\',\n            name: \'alice\',\n            balance: 100\n        }\n    )\n}catch(e){\n    print(e)\n}\n\n# 不传入 _id，mongodb 会自动创建主键\n> db.accounts.insertOne({name:\'a\',balance:200})\n{\n\t"acknowledged" : true,\n\t"insertedId" : ObjectId("5d9778b2323016e2838c6788") // 是个对象，具有唯一性\n}\n')])])]),a("p",[n._v("创建多个文档 db.collection.insertMany()")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("db.<collection>.insertMany(\n    [<document1>,<document2>,...],\n    {\n        writeConcern: <document>,\n        ordered: <boolean>\n    }\n)\n# ordered 决定 mongoDB 是否按顺序来写入这些文档，不提供将会自动优化写入操作，默认为 true\n# {ordered:true} 如果写入发生错误，后面的文档则会都失败\n# {ordered:false} 报错后，后面的仍然会写入成功\n")])])]),a("p",[n._v("创建单个或多个文档")]),n._v(" "),a("p",[n._v("db.collections.insert()")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('> db.accounts.insert({ name: \'george\', balance: 1000 })\nWriteResult({ "nInserted" : 1 })\n> db.accounts.insert({  _id: \'account1\',   name: \'george\',     balance: 1000 })\nWriteResult({\n\t"nInserted" : 0,\n\t"writeError" : {\n\t\t"code" : 11000,\n\t\t"errmsg" : "E11000 duplicate key error collection: test.accounts index: _id_ dup key: { _id: \\"account1\\" }"\n\t}\n})\n\n# 写入多个，发生错误，也会阻止后面的执行\n')])])]),a("ul",[a("li",[n._v("insertOne() 和 insertMany() 不支持 db.collection.explain()")]),n._v(" "),a("li",[n._v("insert() 支持 db.collection.explain()")])]),n._v(" "),a("p",[n._v("db.collection.save() 和 insertOne() 类型，会调用 insert() 命令，所以返回结果和 insert() 一样。")]),n._v(" "),a("p",[n._v("默认的对象主键 ObjectId")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('> ObjectId()\nObjectId("5d977c8d323016e2838c678c")\n> ObjectId("5d977c8d323016e2838c678c")\nObjectId("5d977c8d323016e2838c678c")\n> ObjectId("5d977c8d323016e2838c678c").getTimestamp() # 创建的时间\nISODate("2019-10-04T17:08:29Z")\n')])])]),a("p",[n._v("复合主键\n复合主键的字段顺序和类型不同，都可以插入成功。如果相同，则会报重复错误。")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('> db.accounts.insert({_id:{a:1,b:2},name:\'zs\',balance:12} )\nWriteResult({ "nInserted" : 1 })\n> db.accounts.insert({_id:{a:1,b:2},name:\'zs\',balance:12} )\nWriteResult({\n\t"nInserted" : 0,\n\t"writeError" : {\n\t\t"code" : 11000,\n\t\t"errmsg" : "E11000 duplicate key error collection: test.accounts index: _id_ dup key: { _id: { a: 1.0, b: 2.0 } }"\n\t}\n})\n> db.accounts.insert({_id:{a: 1,b: \'2\'},name:\'zs\',balance:12} )\nWriteResult({ "nInserted" : 1 })\n> db.accounts.insert({_id:{b:2,a:1},name:\'zs\',balance:12} )\nWriteResult({ "nInserted" : 1 })\n')])])]),a("h3",{attrs:{id:"读取文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读取文档","aria-hidden":"true"}},[n._v("#")]),n._v(" 读取文档")]),n._v(" "),a("ul",[a("li",[n._v("db.collection.find()")]),n._v(" "),a("li",[n._v("匹配查询")]),n._v(" "),a("li",[n._v("查询操作符")])]),n._v(" "),a("p",[n._v("返回游标\n投射：只返回部分字段，内嵌文档、数组都可以投射")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("db.collection.find()\n# projection 定义了对结果的投影\ndb.<collection>.find(<query>, <projection>)\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('> db.accounts.find()\n{ "_id" : "account1", "name" : "alice", "balance" : 100 }\n{ "_id" : ObjectId("5d9778b2323016e2838c6788"), "name" : "a", "balance" : 200 }\n{ "_id" : ObjectId("5d977b08323016e2838c6789"), "name" : "george", "balance" : 1000 }\n{ "_id" : ObjectId("5d977b2d323016e2838c678a"), "name" : "george", "balance" : 1000 }\n{ "_id" : { "a" : 1, "b" : 2 }, "name" : "zs", "balance" : 12 }\n{ "_id" : { "a" : 1, "b" : "2" }, "name" : "zs", "balance" : 12 }\n{ "_id" : { "b" : 2, "a" : 1 }, "name" : "zs", "balance" : 12 }\n> db.accounts.find().pretty()\n{ "_id" : "account1", "name" : "alice", "balance" : 100 }\n{\n\t"_id" : ObjectId("5d9778b2323016e2838c6788"),\n\t"name" : "a",\n\t"balance" : 200\n}\n{\n\t"_id" : ObjectId("5d977b08323016e2838c6789"),\n\t"name" : "george",\n\t"balance" : 1000\n}\n{\n\t"_id" : ObjectId("5d977b2d323016e2838c678a"),\n\t"name" : "george",\n\t"balance" : 1000\n}\n{ "_id" : { "a" : 1, "b" : 2 }, "name" : "zs", "balance" : 12 }\n{ "_id" : { "a" : 1, "b" : "2" }, "name" : "zs", "balance" : 12 }\n{ "_id" : { "b" : 2, "a" : 1 }, "name" : "zs", "balance" : 12 }\n# 筛选文档\n> db.accounts.find({name:\'zs\',balance:12})\n{ "_id" : { "a" : 1, "b" : 2 }, "name" : "zs", "balance" : 12 }\n{ "_id" : { "a" : 1, "b" : "2" }, "name" : "zs", "balance" : 12 }\n{ "_id" : { "b" : 2, "a" : 1 }, "name" : "zs", "balance" : 12 }\n> db.accounts.find({name:\'zs\',balance:12})\n> db.accounts.find({\'_id.b\':\'2\'})\n{ "_id" : { "a" : 1, "b" : "2" }, "name" : "zs", "balance" : 12 }\n')])])]),a("p",[n._v("比较操作符")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("{<field>: { $<operator>: <value>}}\n\n$eq\n$ne : 不等于(not equal)\n$gt : 大于\n$gte\n$lt\n$lte\n$in : 匹配字段值与任一查询值相等的文档\n$nin : not in\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('> db.accounts.find({name: {$eq: \'zs\'}})\n{ "_id" : { "a" : 1, "b" : 2 }, "name" : "zs", "balance" : 12 }\n{ "_id" : { "a" : 1, "b" : "2" }, "name" : "zs", "balance" : 12 }\n{ "_id" : { "b" : 2, "a" : 1 }, "name" : "zs", "balance" : 12 }\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("{ field: ${in: [<value1>, <value2> ... <valueN>]}}\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('> db.accounts.find({ name: {$in: [\'alice\',\'a\']}})\n{ "_id" : "account1", "name" : "alice", "balance" : 100 }\n{ "_id" : ObjectId("5d9778b2323016e2838c6788"), "name" : "a", "balance" : 200 }\n')])])]),a("p",[n._v("逻辑操作符")]),n._v(" "),a("ul",[a("li",[a("code",[n._v("$not")]),n._v(": 匹配筛选条件不成立的文档")]),n._v(" "),a("li",[a("code",[n._v("$and")]),n._v(": 匹配多个筛选条件全部成立的文档")]),n._v(" "),a("li",[a("code",[n._v("$or")]),n._v(": 匹配至少一个筛选条件成立的文档")]),n._v(" "),a("li",[a("code",[n._v("$nor")]),n._v(": 匹配多个筛选条件全部不成立的文档")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("# 省略 $and\ndb.accounts.find({balance: {$lt: 1000, $gt: 100}})\n\ndb.accounts.find({\n    $or: [\n        {name: {$eq: 'alice'}},\n        {name: {$eq: 'charlie'}},\n    ]\n})\n# 如果 $or 里都是 $eq，则可以使用 $in 简化\ndb.accounts.find({\n    $name: {\n        $in: ['alice','charlie']\n    }\n})\n\n# 读取不属于 alice 和 charlie 且余额不小于100的银行账户文档\ndb.accounts.find({\n    $nor: [\n        {name: 'alice'},\n        {name: 'charlie'},\n        {balance: {$lt: 100}}\n    ]\n})\n")])])]),a("p",[n._v("字段操作符")]),n._v(" "),a("ul",[a("li",[a("code",[n._v("$exists")]),n._v(":")]),n._v(" "),a("li",[a("code",[n._v("$type")]),n._v(": 指定字段类型")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("{field: {$exists: <boolean>}}\n# 读取包含 _id.type 字段的文档\ndb.accounts.find({'_id.type': {$ne:'typing', $exists: true}})\n\ndb.accounts.find({'balance': {$type:'string'})\ndb.accounts.find({'balance': {$type:'null'})\ndb.accounts.find({'balance': {$type:'2'}) # BJSON 2 表示 string，旧版本只支持这种\n")])])]),a("p",[n._v("数组操作符")]),n._v(" "),a("ul",[a("li",[a("code",[n._v("$all")]),n._v(": 都包含才返回")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("db.accounts.find({contact: {$all: ['china', 'beijing']}})\ndb.accounts.find({contact: {$all: [['china', 'beijing']]}})\n")])])])])}),[],!1,null,null,null);e.default=c.exports}}]);