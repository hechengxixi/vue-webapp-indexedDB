
export default {
	operateIndexedDB (dbName, operate) {
		var openRequest = localDatabase.indexedDB.open(dbName);
 
	   openRequest.onerror = function(e) {
	      console.log("Database error: " + e.target.errorCode);
	   };
	   openRequest.onsuccess = function(event) {
	      console.log("Database created");
	      localDatabase.db = openRequest.result;
	   };
	   openRequest.onupgradeneeded = function (evt) {
	         
	   };
	},
	deleteDatabase (dbName) {
	   var deleteDbRequest = localDatabase.indexedDB.deleteDatabase(dbName);
	   deleteDbRequest.onsuccess = function (event) {
	      // database deleted successfully
	   };
	   deleteDbRequest.onerror = function (e) {
	      console.log("Database error: " + e.target.errorCode);
	   };
	}
}