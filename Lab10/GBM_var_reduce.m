function [Paths,Times] = GBM_var_reduce(S0,r,sigma,nPeriods,nTrials)
dt = 1/nPeriods;
Times = nPeriods;
Paths = zeros(Times,1,nTrials);
Paths(1,:,:) = S0;
X = normrnd(0,1,[Times,nTrials]);
c = (r - 0.5*sigma^2);
    for i=2:Times
        for j=1:nTrials
%             antithetic variance reduction theta = avg(Y1 + y2), 
%             Y1 and Y2 are neg. correlated 
%             in this case Y1 = g(X) ~N(0,1) and Y2 = g(-X) where g is
%             GBM stock price
           Paths(i,1,j) = Paths(i-1,1,j)*(exp(c*dt + sigma*sqrt(dt)*X(i,j)) + ...
                            exp(c*dt + sigma*sqrt(dt)*(-X(i,j))))/2;
        end
    end

end