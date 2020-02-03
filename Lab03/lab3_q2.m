S0 = 100;
K = 100;
T = 1;
M = 100;
r = 0.08;
sigma = 0.2;
A = [5,10,15,20];
fprintf('M\t\tLookback option price\n');
for i=1:length(A)
   fprintf('%d\t\t%0.3f\n',A(i),Look_back(S0,K,A(i),T,r,sigma));
end
V = Look_back_table(S0,K,5,T,r,sigma);
V = V';
[m n] = size(V)
var_names = {'T0','T1','T2','T3','T4','T5'};
table = array2table(V,'VariableNames',{'T0','T1','T2','T3','T4','T5'});
fprintf(1, '%s\t\t%s\t\t\t%s\t\t%s\n', var_names{:})
fprintf(1, '%.2f\t%.2f\t%.2f\t%.2f\t%.2f\n', V)
% for i=1:m
%     for j=1:n
%         fprintf('%0.2f\t',V(i,j));
%     end
%     fprintf('\n');
% end



function price = Look_back(S0,K,M,T,r,sigma)
    delta= T/M;
    u=exp(sigma*sqrt(delta) + (r-0.5*sigma*sigma)*delta);
    d=exp(-sigma*sqrt(delta) + (r-0.5*sigma*sigma)*delta);  
 
    p=(exp(r*delta)-d)/(u-d);
    
    S=zeros(M+1,pow2(M));   %stock price
    S(1,1)=S0;
    
    for i=1:M
        for j=1:(pow2(i-1))
            S(i+1,(2*j)-1)=S(i,j)*d;
            S(i+1,2*j)=S(i,j)*u;
        end
    end
    
    V=zeros(M+1,pow2(M));   %Option price
    
    for i=1:pow2(M)
        max_stock_price=0;
        iforavg=i;
        for j=M+1:-1:1
            max_stock_price=max(S(j,iforavg),max_stock_price);
            iforavg=ceil(iforavg/2);
        end
        V(M+1,i)=max_stock_price-S(M+1,i);
        
    end
    
    for i=M:-1:1
        for j=1:pow2(i-1)
            V(i,j)=exp(-r*delta)*(p*V(i+1,2*j)+(1-p)*V(i+1,(2*j)-1));
        end
    end
    
    price=V(1,1);
        
    
end
function V = Look_back_table(S0,K,M,T,r,sigma)
    delta= T/M;
    u=exp(sigma*sqrt(delta) + (r-0.5*sigma*sigma)*delta);
    d=exp(-sigma*sqrt(delta) + (r-0.5*sigma*sigma)*delta);  
 
    p=(exp(r*delta)-d)/(u-d);
    
    S=zeros(M+1,pow2(M));   %stock price
    S(1,1)=S0;
    max_stock_price = zeros(M+1,pow2(M));
    for i=1:M
        for j=1:(pow2(i-1))
            S(i+1,(2*j)-1)=S(i,j)*d;
            S(i+1,2*j)=S(i,j)*u;
        end
    end
    
    V=zeros(M+1,pow2(M));   %Option price
    
    for i=1:pow2(M)
        max_stock_price=0;
        iforavg=i;
        for j=M+1:-1:1
            max_stock_price=max(S(j,iforavg),max_stock_price);
            iforavg=ceil(iforavg/2);
        end
        V(M+1,i)=max_stock_price-S(M+1,i);
        
    end
    
    for i=M:-1:1
        for j=1:pow2(i-1)
            V(i,j)=exp(-r*delta)*(p*V(i+1,2*j)+(1-p)*V(i+1,(2*j)-1));
        end
    end
    
    price=V(1,1);    

end