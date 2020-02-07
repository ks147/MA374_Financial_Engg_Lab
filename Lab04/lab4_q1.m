M = [0.1;0.2;0.15];
V = [0.005 -0.010 0.004;-0.010 0.040 -0.002;0.004 -0.002 0.023];
Vinv = inv(V);
e = ones(length(M),1);
A = e'*Vinv*e;
B = M'*Vinv*e;
C = M'*Vinv*M;
D = A*C - B^2;

bg = (C*Vinv*e - B*Vinv*M)/D;
bh = (A*Vinv*M - B*Vinv*e)/D;
mu = linspace(0.005,max(M),2000);
sigma = zeros(1,2000);
w_for_mu = zeros(3,2000);
for i=1:2000
    w_for_mu(:,i) = bg + bh*mu(i);
    sigma(i) = sqrt(w_for_mu(:,i)'*V*w_for_mu(:,i));
end
%Minimum Variance Portfolio weights and sigma    
sd_min = 1/sqrt(A); 
mu_min = B/A;
w_g = Vinv*e/A;

ind_above_min = (mu > mu_min) ;	%	Indicates efficient horizon
ind_below_min = (mu < mu_min) ;	%	Indicates locus below efficient horizon

%	Create plot - efficient horizon is shown as a solid curve
%		-  the inefficient part of the locus is dashed
figure(1)
p1 = plot(sigma(ind_above_min),mu(ind_above_min),'-',sigma(ind_below_min),mu(ind_below_min),'--' ,sd_min,mu_min,'.') ;

%	Change line widths, marker sizes, and colors for better appearance
set(p1(1:2),'linewidth',2) ;
set(p1(1:2),'color','blue') ;
set(p1(3),'markersize',20) ;
set(p1(3),'color','red') ;

%	Label axes
xlabel('standard deviation of return') ;
ylabel('expected return') ;
% set(gca,'xlim',[.25, .5]) ;
% set(gca,'ylim',[0.028, .08]) ;
grid;

%%%%%(c)%%%%%
mu1 = mu(ind_below_min);
mu2 = mu(ind_above_min);
w1 = w_for_mu(:,ind_below_min);
w2 = w_for_mu(:,ind_above_min);
sigma1 = sigma(ind_below_min);
sigma2 = sigma(ind_above_min);
[sig1 ind_min_return] = min(abs(sigma1'-0.15));
[sig ind_max_return] = min(abs(sigma2'-0.15));
fprintf('At 0.15 risk\n');
fprintf('min return=%0.3f\n',mu1(ind_min_return));
fprintf('Corresponding Portfolio: w1=%0.3f, w2=%0.3f, w3=%0.3f\n\n',w1(:,ind_min_return));

fprintf('At 0.15\n');
fprintf('max return=%0.3f\n',mu2(ind_max_return));
fprintf('Corresponding Portfolio: w1=%0.3f, w2=%0.3f, w3=%0.3f\n\n',w2(:,ind_max_return));
%%%%%(d)%%%%%%
[sig1 ind_min_return] = min(abs(sigma1'-0.18));

fprintf('At 0.18 risk\n');
fprintf('min return=%0.3f\n',mu1(ind_min_return));
fprintf('Corresponding Portfolio: w1=%0.3f, w2=%0.3f, w3=%0.3f\n\n',w1(:,ind_min_return));

%%%%e%%%%
%finding portfolio that maximises the sharpe ratio
%tangency portfolio
rf = 0.1;
W_tang = Vinv*(M-rf*e)/sum(Vinv*(M-rf*e));
mu_tang = W_tang'*M;
sig_tang = sqrt(W_tang'*V*W_tang);
y_max = 0.3;
x_max = sig_tang+sig_tang*(y_max-mu_tang)/(mu_tang-rf);
line([0 x_max],[rf y_max],'Color','green')
%%%%%(e)%%%%
%risk=0.1
mu_4 = mu_tang + (0.1-sig_tang)*(mu_tang-rf)/sig_tang;
mu_5 = mu_tang + (0.25-sig_tang)*(mu_tang-rf)/sig_tang;
fprintf('return for 0.1 risk=%0.3f\n',mu_4);
fprintf('return for 0.25 risk=%0.3f\n\n',mu_5);





