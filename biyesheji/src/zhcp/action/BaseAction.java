package zhcp.action;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.interceptor.ServletRequestAware;
import org.apache.struts2.interceptor.SessionAware;

public class BaseAction implements SessionAware,ServletRequestAware{
    protected Map<String,Object>session;
    protected HttpServletRequest request;
	public void setSession(Map<String, Object> session) {
		// TODO Auto-generated method stub
		this.session=session;
	}

	public void setServletRequest(HttpServletRequest request) {
		// TODO Auto-generated method stub
		this.request=request;
	}
   
}
