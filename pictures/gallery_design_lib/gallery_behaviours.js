var galleryBehaviours = {
	
	'.addPicForGallery' : function (el) {
    el.onclick = function () {
			addPostingContainer(el,'PIC_ORDNUM',10);
/*			var curPostingPrefix=el.parentNode.parentNode.getElementsByTagName("INPUT")[0].value;
			var newPostingPrefix=curPostingPrefix.match(/\D+/)+(Number(curPostingPrefix.match(/\d+/))+1);
      var newRow=addFields(el,curPostingPrefix,newPostingPrefix);
      var newFields=newRow.getElementsByTagName("INPUT");
      for (i=0; i<newFields.length; i++)
        if (newFields[i].id=="PIC_ORDNUM")
          newFields[i].value=Number(newFields[i].value)+10;*/
      return false;
    }
  }
}

Behaviour.register(galleryBehaviours);
