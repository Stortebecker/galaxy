define(["mvc/history/history-contents"],function(a){return Backbone.Model.extend({initialize:function(c){this.currHistoryContents=new a.HistoryContents({});this.currHistoryContents.historyId="f597429621d6eb2b";var b=this;var d=this.currHistoryContents.fetchAllDetails().done(function(){console.debug("tools-datasets::initialize() - Completed.");c.success&&c.success()}).fail(function(){console.debug("tools-datasets::initialize() - Ajax request failed.")})},filterType:function(b){return this.currHistoryContents.filter(function(c){var d=c.get("history_content_type");var e=c.get("file_ext");return d==="dataset"})},filter:function(b){return _.first(this.currHistoryContents.filter(function(c){return c.get("id")===b}))}})});